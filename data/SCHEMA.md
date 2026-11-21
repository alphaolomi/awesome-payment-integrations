# YAML Schema

Every record under `data/` uses this structure. One record per file.

```yaml
id: string                     # provider-<name> or sdk-<name>; never change once published
entity_type: provider | sdk
category: mobile-money | psp | bank-api | plugin | utility | sdk
name: string
provider: string | null        # SDKs: the provider's `name`, exactly
region: East Africa | West Africa | Central Africa | Southern Africa | North Africa | Pan-African
countries:
  - string
languages:
  - string                     # providers: HTTP API; SDKs: the programming languages
integration_types:
  - API | SDK | Hosted Checkout | Push USSD | Plugin | Utility
maintainer_type: official | community | unknown
repo_url: string | null
docs_url: string | null
website_url: string | null
status: active | unknown
api_access: open | sign-up | on-request   # providers
licence: string | null                     # providers: regulator and licence type, only when verified
last_verified: YYYY-MM-DD                  # when the links and facts were last checked
notes: string
tags:
  - string
```

## Required fields

`id`, `entity_type`, `category`, `name`, `region`, `countries`, `languages`, `integration_types`, `maintainer_type`, `status`. Providers also need `api_access`.

## API access

- `open`: the API docs are public and no account is needed to read them or to try the sandbox.
- `sign-up`: the docs are public and a self-serve account gives sandbox keys.
- `on-request`: the docs or onboarding path are public, and keys come through a merchant agreement.

## Inclusion rule

A provider is listed only when it has public developer documentation, a public API reference, a sandbox, or a documented merchant API. Consumer-only wallets and unverifiable listings are not included.

## Notes

- `provider` must match the provider record's `name`, so the site can show each provider's SDKs.
- Use `null` when a URL isn't available.
- Keep `tags` short and searchable, for example `laravel`, `tanzania`, `mpesa`.
