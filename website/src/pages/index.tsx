import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {ACCESS_HELP, ACCESS_ORDER, AccessBadge, providers, regions} from '@site/src/components/Catalogue';

import styles from './index.module.css';

const SCHEMA_URL = 'https://github.com/alphaolomi/awesome-payment-integrations/blob/main/data/SCHEMA.md';

const REGION_LINE: Record<string, string> = {
  'East Africa': 'Mobile money, aggregators and bank APIs from Tanzania to Ethiopia.',
  'West Africa': 'Card and mobile money gateways across anglophone and francophone markets.',
  'Central Africa': 'Mobile money gateways for Cameroon and its neighbours.',
  'Southern Africa': 'Card, EFT and wallet gateways from South Africa to Malawi.',
  'North Africa': 'Gateways for Egypt, Morocco, Tunisia and Algeria.',
  'Pan-African': 'Networks and gateways that work across many countries.',
};

function regionCountries(region: string): string[] {
  const set = new Set<string>();
  for (const p of providers) if (p.region === region) p.countries.forEach((c) => set.add(c));
  return [...set].sort((a, b) => a.localeCompare(b));
}

function Hero(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.eyebrow}>Awesome African Payment Integrations</p>
        <Heading as="h1" className={styles.title}>
          African payment APIs, <span>curated.</span>
        </Heading>
        <p className={styles.lead}>
          Find a payment provider by country, see how you get API access, and pick an SDK. Every listing has public
          developer documentation or a documented merchant API.
        </p>
        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/directory">
            Browse the directory
          </Link>
          <Link className={`button button--lg ${styles.ghost}`} href={SCHEMA_URL}>
            Add a provider
          </Link>
        </div>
      </div>
      <div className={styles.weave} aria-hidden="true" />
    </header>
  );
}

function Regions(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.h2}>
          Browse by region
        </Heading>
        <div className={styles.regionGrid}>
          {regions.map((region) => {
            const list = regionCountries(region);
            if (!list.length) return null;
            return (
              <Link key={region} className={styles.regionCard} to={`/directory?region=${encodeURIComponent(region)}`}>
                <span className={styles.regionName}>{region}</span>
                <span className={styles.regionLine}>{REGION_LINE[region]}</span>
                <span className={styles.chips}>
                  {list.slice(0, 8).map((c) => (
                    <span key={c} className={styles.chip}>
                      {c}
                    </span>
                  ))}
                  {list.length > 8 ? <span className={styles.more}>and more</span> : null}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AccessSection(): ReactNode {
  return (
    <section className={`${styles.section} ${styles.tinted}`}>
      <div className="container">
        <Heading as="h2" className={styles.h2}>
          How you get API access
        </Heading>
        <p className={styles.sectionLead}>
          Each provider carries one of three labels, so you know what to expect before you start.
        </p>
        <div className={styles.accessGrid}>
          {ACCESS_ORDER.map((a) => (
            <div key={a} className={styles.accessCard}>
              <AccessBadge access={a} />
              <p>{ACCESS_HELP[a]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contribute(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.contribute}`}>
        <div>
          <Heading as="h2" className={styles.h2}>
            What gets listed
          </Heading>
          <p className={styles.sectionLead}>
            Providers with public developer docs, an API reference, a sandbox or a documented merchant API, plus the
            official and community SDKs for them. Consumer-only wallets and listings that can't be verified stay out.
          </p>
        </div>
        <div className={styles.contributeBox}>
          <p>
            Know a provider or SDK that belongs here? Add it as one YAML record in <code>data/</code> and open a pull
            request.
          </p>
          <Link className="button button--primary" href={SCHEMA_URL}>
            Read the schema
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="African payment APIs, curated"
      description="Malipo is a curated directory of African payment providers with usable APIs: mobile money, payment gateways and bank APIs, with their SDKs.">
      <Hero />
      <main>
        <Regions />
        <AccessSection />
        <Contribute />
      </main>
    </Layout>
  );
}
