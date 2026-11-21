// Builds the catalogue from ../data/**/*.yml.
//   node scripts/build-catalogue.mjs           -> src/data/catalogue.json (used by the site)
//   node scripts/build-catalogue.mjs --readme  -> also rewrites the listing in ../README.md
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import yaml from 'js-yaml';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..', '..');
const dataDir = path.join(root, 'data');
const outFile = path.resolve(here, '..', 'src', 'data', 'catalogue.json');

const REGIONS = ['East Africa', 'West Africa', 'Central Africa', 'Southern Africa', 'North Africa', 'Pan-African'];
const REQUIRED = ['id', 'entity_type', 'category', 'name', 'region', 'countries', 'languages', 'integration_types', 'maintainer_type', 'status'];
const ACCESS = ['open', 'sign-up', 'on-request'];

function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith('.yml') ? [full] : [];
  });
}

const errors = [];
const records = walk(dataDir).map((file) => {
  const record = yaml.load(fs.readFileSync(file, 'utf8'));
  const rel = path.relative(root, file).replaceAll('\\', '/');
  for (const key of REQUIRED) {
    if (record[key] === undefined || record[key] === null) errors.push(`${rel}: missing ${key}`);
  }
  if (!REGIONS.includes(record.region)) errors.push(`${rel}: unknown region "${record.region}"`);
  if (record.entity_type === 'provider' && !ACCESS.includes(record.api_access)) {
    errors.push(`${rel}: api_access must be one of ${ACCESS.join(', ')}`);
  }
  return {...record, file: rel};
});

const ids = new Map();
for (const r of records) {
  if (ids.has(r.id)) errors.push(`duplicate id ${r.id} in ${r.file} and ${ids.get(r.id)}`);
  ids.set(r.id, r.file);
}

const providers = records.filter((r) => r.entity_type === 'provider');
const byName = new Map(providers.map((p) => [p.name, {...p, sdks: []}]));
const orphans = [];
for (const sdk of records.filter((r) => r.entity_type === 'sdk')) {
  const owner = sdk.provider ? byName.get(sdk.provider) : undefined;
  if (owner) owner.sdks.push(sdk);
  else orphans.push(sdk);
}
for (const sdk of orphans) {
  if (sdk.provider) errors.push(`${sdk.file}: provider "${sdk.provider}" doesn't match any provider name`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

const sortByName = (a, b) => a.name.localeCompare(b.name, 'en', {sensitivity: 'base'});
const list = [...byName.values()].sort(sortByName);
for (const p of list) p.sdks.sort(sortByName);
const countries = [...new Set(list.flatMap((p) => p.countries))].sort((a, b) => a.localeCompare(b));

fs.mkdirSync(path.dirname(outFile), {recursive: true});
fs.writeFileSync(outFile, JSON.stringify({regions: REGIONS, countries, providers: list, tools: orphans.sort(sortByName)}, null, 2) + '\n');
console.log(`catalogue: ${list.length} providers, ${records.length - providers.length} SDKs and tools`);

if (process.argv.includes('--readme')) {
  const ACCESS_LABEL = {open: 'open', 'sign-up': 'sign-up', 'on-request': 'on request'};
  const lines = [];
  for (const region of REGIONS) {
    const inRegion = list.filter((p) => p.region === region);
    if (!inRegion.length) continue;
    lines.push(`## ${region}`, '');
    for (const p of inRegion) {
      const links = [p.docs_url && `[Docs](${p.docs_url})`, p.website_url && `[Website](${p.website_url})`].filter(Boolean).join(' · ');
      lines.push(`- **${p.name}** (${p.countries.join(', ')}). API access: ${ACCESS_LABEL[p.api_access]}.${links ? ' ' + links : ''}`);
      for (const s of p.sdks) {
        const kind = s.category === 'plugin' ? 'Plugin' : s.category === 'utility' ? 'Tool' : 'SDK';
        const url = s.repo_url || s.docs_url;
        const label = url && url.startsWith('https://github.com/') ? url.replace('https://github.com/', '') : s.name;
        lines.push(`  - ${kind} (${s.languages.join(', ')}) - [${label}](${url}) (\`${s.maintainer_type}\`)`);
      }
    }
    lines.push('');
  }
  if (orphans.length) {
    lines.push('## Tools', '');
    for (const s of orphans) lines.push(`- [${s.name}](${s.repo_url || s.docs_url}) (\`${s.maintainer_type}\`)`);
    lines.push('');
  }
  const readmePath = path.join(root, 'README.md');
  const readme = fs.readFileSync(readmePath, 'utf8');
  const start = '<!-- catalogue:start -->';
  const end = '<!-- catalogue:end -->';
  if (!readme.includes(start) || !readme.includes(end)) {
    console.error('README.md needs the catalogue markers');
    process.exit(1);
  }
  const before = readme.slice(0, readme.indexOf(start) + start.length);
  const after = readme.slice(readme.indexOf(end));
  fs.writeFileSync(readmePath, `${before}\n<!-- Generated from data/ by website/scripts/build-catalogue.mjs. Edit the YAML records, not this list. -->\n\n${lines.join('\n')}\n${after}`);
  console.log('README listing updated');
}
