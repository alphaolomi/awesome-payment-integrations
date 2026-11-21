# Data Catalogue

Machine-readable records for the catalogue. The website directory and the README listing are built from these files.

## Layout

- `mobile-money/`: mobile money operators and wallet APIs
- `psp/`: payment service providers, aggregators and gateways
- `bank-api/`: bank developer APIs
- `other/`: other payment infrastructure, such as government payment gateways
- `sdk/`: SDKs, libraries and plugins

## Authoring rules

1. Use YAML (`.yml`), one record per file.
2. Follow the schema in `SCHEMA.md`.
3. Use lowercase kebab-case file names.
4. Set `maintainer_type` to `official`, `community` or `unknown`.
5. Check every link before submitting, and set `last_verified`.
