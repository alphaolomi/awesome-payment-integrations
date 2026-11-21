import type {ReactNode} from 'react';
import catalogue from '@site/src/data/catalogue.json';

export type Access = 'open' | 'sign-up' | 'on-request';

export type Sdk = {
  id: string;
  name: string;
  category: string;
  languages: string[];
  maintainer_type: string;
  repo_url: string | null;
  docs_url: string | null;
};

export type Provider = {
  id: string;
  name: string;
  category: string;
  region: string;
  countries: string[];
  maintainer_type: string;
  repo_url: string | null;
  docs_url: string | null;
  website_url: string | null;
  api_access: Access;
  licence?: string | null;
  notes?: string;
  tags?: string[];
  sdks: Sdk[];
};

export const regions = catalogue.regions as string[];
export const countries = catalogue.countries as string[];
export const providers = catalogue.providers as unknown as Provider[];

export const ACCESS_ORDER: Access[] = ['open', 'sign-up', 'on-request'];

export const ACCESS_LABEL: Record<Access, string> = {
  open: 'Open',
  'sign-up': 'Sign-up',
  'on-request': 'On request',
};

export const ACCESS_HELP: Record<Access, string> = {
  open: 'Docs are public and you can explore without an account.',
  'sign-up': 'Docs are public, and a self-serve account gives you sandbox keys.',
  'on-request': 'Docs or onboarding are public, and keys come with a merchant agreement.',
};

export const CATEGORY_LABEL: Record<string, string> = {
  'mobile-money': 'Mobile money',
  psp: 'Payment gateway',
  'bank-api': 'Bank API',
  utility: 'Payment infrastructure',
};

export function AccessBadge({access}: {access: Access}): ReactNode {
  return (
    <span className={`mp-badge mp-badge--${access}`} title={ACCESS_HELP[access]}>
      {ACCESS_LABEL[access]}
    </span>
  );
}
