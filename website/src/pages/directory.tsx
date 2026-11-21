import {useEffect, useMemo, useState, type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  ACCESS_LABEL,
  ACCESS_ORDER,
  AccessBadge,
  CATEGORY_LABEL,
  countries,
  providers,
  regions,
  type Access,
  type Provider,
} from '@site/src/components/Catalogue';

import styles from './directory.module.css';

type Filters = {q: string; region: string; country: string; category: string; access: Access[]};

const EMPTY: Filters = {q: '', region: '', country: '', category: '', access: []};

function readFilters(): Filters {
  if (typeof window === 'undefined') return EMPTY;
  const params = new URLSearchParams(window.location.search);
  const access = (params.get('access') ?? '')
    .split(',')
    .filter((a): a is Access => (ACCESS_ORDER as string[]).includes(a));
  return {
    q: params.get('q') ?? '',
    region: params.get('region') ?? '',
    country: params.get('country') ?? '',
    category: params.get('category') ?? '',
    access,
  };
}

function writeFilters(f: Filters): void {
  const params = new URLSearchParams();
  if (f.q) params.set('q', f.q);
  if (f.region) params.set('region', f.region);
  if (f.country) params.set('country', f.country);
  if (f.category) params.set('category', f.category);
  if (f.access.length) params.set('access', f.access.join(','));
  const query = params.toString();
  window.history.replaceState(null, '', query ? `?${query}` : window.location.pathname);
}

function haystack(p: Provider): string {
  return [
    p.name,
    p.region,
    p.notes ?? '',
    ...p.countries,
    ...(p.tags ?? []),
    ...p.sdks.flatMap((s) => [s.name, ...s.languages]),
  ]
    .join(' ')
    .toLowerCase();
}

function matches(p: Provider, f: Filters): boolean {
  if (f.region && p.region !== f.region) return false;
  if (f.country && !p.countries.includes(f.country)) return false;
  if (f.category && p.category !== f.category) return false;
  if (f.access.length && !f.access.includes(p.api_access)) return false;
  if (f.q) {
    const text = haystack(p);
    return f.q
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .every((word) => text.includes(word));
  }
  return true;
}

function ExternalLink({href, children}: {href: string; children: ReactNode}): ReactNode {
  return (
    <a className={styles.link} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

function ProviderCard({p}: {p: Provider}): ReactNode {
  return (
    <article className={styles.card}>
      <header className={styles.cardHead}>
        <div>
          <Heading as="h3" className={styles.name}>
            {p.name}
          </Heading>
          <p className={styles.meta}>
            {CATEGORY_LABEL[p.category] ?? p.category} · {p.region}
          </p>
        </div>
        <AccessBadge access={p.api_access} />
      </header>
      {p.notes ? <p className={styles.notes}>{p.notes}</p> : null}
      <ul className={styles.countries} aria-label="Countries">
        {p.countries.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      {p.licence ? <p className={styles.licence}>Licence: {p.licence}</p> : null}
      <div className={styles.links}>
        {p.docs_url ? <ExternalLink href={p.docs_url}>Docs</ExternalLink> : null}
        {p.website_url && p.website_url !== p.docs_url ? <ExternalLink href={p.website_url}>Website</ExternalLink> : null}
        {p.repo_url ? <ExternalLink href={p.repo_url}>GitHub</ExternalLink> : null}
      </div>
      {p.sdks.length ? (
        <details className={styles.sdks}>
          <summary>SDKs and plugins</summary>
          <ul>
            {p.sdks.map((s) => {
              const url = s.repo_url ?? s.docs_url;
              return (
                <li key={s.id}>
                  <span className={styles.lang}>{s.languages.join(', ')}</span>
                  {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {s.name}
                    </a>
                  ) : (
                    s.name
                  )}
                  <span className={s.maintainer_type === 'official' ? styles.official : styles.community}>
                    {s.maintainer_type}
                  </span>
                </li>
              );
            })}
          </ul>
        </details>
      ) : null}
    </article>
  );
}

export default function Directory(): ReactNode {
  const [filters, setFilters] = useState<Filters>(EMPTY);

  useEffect(() => {
    setFilters(readFilters());
  }, []);

  const update = (patch: Partial<Filters>) => {
    const next = {...filters, ...patch};
    setFilters(next);
    writeFilters(next);
  };

  const toggleAccess = (a: Access) =>
    update({access: filters.access.includes(a) ? filters.access.filter((x) => x !== a) : [...filters.access, a]});

  const results = useMemo(() => providers.filter((p) => matches(p, filters)), [filters]);
  const active = filters.q || filters.region || filters.country || filters.category || filters.access.length;

  return (
    <Layout
      title="Directory"
      description="Search African payment providers with usable APIs by country, type and how you get API access.">
      <main className={styles.page}>
        <div className="container">
          <Heading as="h1" className={styles.title}>
            Directory
          </Heading>
          <p className={styles.lead}>
            Payment providers with usable APIs, and the SDKs for them. Filter by where you sell and how you want to get
            started.
          </p>

          <div className={styles.controls} role="search">
            <input
              className={styles.search}
              type="search"
              placeholder="Search providers, countries, languages…"
              value={filters.q}
              onChange={(e) => update({q: e.target.value})}
              aria-label="Search"
            />
            <select value={filters.region} onChange={(e) => update({region: e.target.value})} aria-label="Region">
              <option value="">All regions</option>
              {regions.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
            <select value={filters.country} onChange={(e) => update({country: e.target.value})} aria-label="Country">
              <option value="">All countries</option>
              {countries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
            <select value={filters.category} onChange={(e) => update({category: e.target.value})} aria-label="Type">
              <option value="">All types</option>
              {Object.entries(CATEGORY_LABEL).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.toolbar}>
            <div className={styles.toggles} role="group" aria-label="API access">
              {ACCESS_ORDER.map((a) => (
                <button
                  key={a}
                  type="button"
                  className={`${styles.toggle} ${filters.access.includes(a) ? styles.on : ''}`}
                  aria-pressed={filters.access.includes(a)}
                  onClick={() => toggleAccess(a)}>
                  {ACCESS_LABEL[a]}
                </button>
              ))}
            </div>
            <p className={styles.count} aria-live="polite">
              {results.length === 1 ? '1 provider' : `${results.length} providers`}
              {active ? (
                <button type="button" className={styles.clear} onClick={() => update(EMPTY)}>
                  Clear filters
                </button>
              ) : null}
            </p>
          </div>

          {results.length ? (
            <div className={styles.grid}>
              {results.map((p) => (
                <ProviderCard key={p.id} p={p} />
              ))}
            </div>
          ) : (
            <p className={styles.empty}>No provider matches these filters yet. Know one? Add it to the catalogue.</p>
          )}
        </div>
      </main>
    </Layout>
  );
}
