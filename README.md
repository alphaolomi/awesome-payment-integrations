# Awesome African Payment Integrations

A curated index of African payment providers, mobile money APIs, and integration libraries.

This repository is organized for regional discovery:

`Region -> Country -> Provider -> SDKs/Libraries`

## East Africa

### Tanzania

#### AzamPay
- SDK (Go) - [elirehema/azampay](https://github.com/elirehema/azampay) (`community`)

#### M-Pesa (Vodacom)
- SDK (PHP) - [openpesa/php-pesa](https://github.com/openpesa/php-pesa) (`community`)
- SDK (Laravel) - [openpesa/laravel-pesa](https://github.com/openpesa/laravel-pesa) (`community`)
- Push/USSD (Laravel) - [tumainimosha/laravel-mpesa-push](https://github.com/tumainimosha/laravel-mpesa-push) (`community`)
- SDK Docs (Python) - [python-pesa](https://kalebu.github.io/python-pesa/) (`community`)

#### Mixx by Yas (formerly Tigo Pesa)
- Push/USSD (Laravel) - [tumainimosha/laravel-tigopesa-push](https://github.com/tumainimosha/laravel-tigopesa-push) (`community`)
- SDK (Python) - [Kalebu/tigopesa](https://github.com/Kalebu/tigopesa) (`community`)
- Plugin (WHMCS) - [devmedtz/whmcs-tigopesa](https://github.com/devmedtz/whmcs-tigopesa) (`community`)

#### Selcom
- SDK (Java) - [selcom-developers/selcom4j](https://github.com/selcom-developers/selcom4j) (`community`)
- SDK (Node.js) - [selcom-developers/selcom-node](https://github.com/selcom-developers/selcom-node) (`community`)
- SDK (PHP) - [selcom-developers/selcom-php](https://github.com/selcom-developers/selcom-php) (`community`)
- SDK (Laravel) - [selcom-developers/laravel-selcom](https://github.com/selcom-developers/laravel-selcom) (`community`)
- SDK (Laravel) - [bryceandy/laravel-selcom](https://github.com/bryceandy/laravel-selcom) (`community`)
- SDK (Python) - [selcom-developers/selcompy](https://github.com/selcom-developers/selcompy) (`community`)
- Client specification - [selcom-developers/selcom-spec](https://github.com/selcom-developers/selcom-spec) (`community`)

#### NMB Bank
- SDK (Django/Python) - [devmedtz/django-nmb](https://github.com/devmedtz/django-nmb) (`community`)

#### Utility
- Mobile number assignment (Tanzania) - [techcraftlabs/mna](https://github.com/techcraftlabs/mna) (`community`)

### Regional / Pan-African

#### DPO Group
- SDK (PHP) - [Zepson-Technologies/dpo-php](https://github.com/Zepson-Technologies/dpo-php) (`community`)
- SDK (Laravel) - [Zepson-Technologies/dpo-laravel](https://github.com/Zepson-Technologies/dpo-laravel) (`community`)

## Maintainer Labels

- `official`: Maintained by the payment provider or vendor organization.
- `community`: Maintained by external open-source contributors.

## Structured Data Catalogue

Machine-readable records live under the `data/` directory:

- `data/mobile-money/`
- `data/psp/`
- `data/sdk/`

Use the schema documented in `data/SCHEMA.md` for all new records.

## Contributing

To add a new provider or SDK, submit a PR that:

1. Adds or updates YAML entries in `data/`.
2. Links the integration in the appropriate regional section above.
3. Marks the entry as `official` or `community`.
