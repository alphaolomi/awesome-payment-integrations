<p align="center"><img src="website/static/img/logo.svg" width="72" height="72" alt=""></p>

# Malipo — Awesome African Payment Integrations

Malipo (Swahili for "payments") is a curated index of African payment providers with usable APIs, and the SDKs for them. Search and filter it by country, type and API access at **[alphaolomi.github.io/awesome-payment-integrations](https://alphaolomi.github.io/awesome-payment-integrations/directory)**.

**What gets listed:** providers with public developer docs, an API reference, a sandbox or a documented merchant API, plus the official and community SDKs for them. Consumer-only wallets and listings that can't be verified stay out.

**API access:**

- `open`: docs are public and you can explore without an account.
- `sign-up`: docs are public, and a self-serve account gives you sandbox keys.
- `on request`: docs or onboarding are public, and keys come with a merchant agreement.

**SDKs** are marked `official` (maintained by the provider) or `community`.

<!-- catalogue:start -->
<!-- Generated from data/ by website/scripts/build-catalogue.mjs. Edit the YAML records, not this list. -->

## East Africa

- **ArifPay** (Ethiopia). API access: sign-up. [Docs](https://developer.arifpay.net/) · [Website](https://arifpay.net)
- **AzamPay** (Tanzania, Rwanda). API access: sign-up. [Docs](https://developerdocs.azampay.co.tz/introduction) · [Website](https://www.azampay.com)
  - SDK (Go) - [elirehema/azampay](https://github.com/elirehema/azampay) (`community`)
- **Chapa** (Ethiopia). API access: sign-up. [Docs](https://developer.chapa.co/) · [Website](https://chapa.co)
- **ClickPesa** (Tanzania). API access: sign-up. [Docs](https://docs.clickpesa.com) · [Website](https://clickpesa.com)
  - Plugin (PHP) - [ClickPesa/ClickPesa-WooCommerce-Plugin-Release](https://github.com/ClickPesa/ClickPesa-WooCommerce-Plugin-Release) (`official`)
- **EvPay** (Tanzania). API access: sign-up. [Docs](https://docs.evpay.co.tz/introduction) · [Website](https://web.evpay.co.tz/)
- **GePG (Government e-Payment Gateway)** (Tanzania). API access: on request. [Docs](https://openimis.atlassian.net/wiki/download/attachments/3051225101/Bill+And+++Payment++Information+++PostingAPIv4.0.pdf?version=1)
- **IntaSend** (Kenya, Uganda, Tanzania, Rwanda). API access: sign-up. [Docs](https://developers.intasend.com/) · [Website](https://developers.intasend.com/)
  - SDK (JavaScript) - [IntaSend/intasend-node](https://github.com/IntaSend/intasend-node) (`official`)
  - SDK (PHP) - [IntaSend/intasend-php](https://github.com/IntaSend/intasend-php) (`official`)
  - SDK (Python) - [IntaSend/intasend-python](https://github.com/IntaSend/intasend-python) (`official`)
- **IremboPay** (Rwanda). API access: on request. [Docs](https://irembopay.gitbook.io/irembopay-api-docs/getting-started/quickstart) · [Website](https://irembo.com/irembopay/)
- **Jenga (Equity Bank)** (Kenya, Uganda, Tanzania, Rwanda, DR Congo, South Sudan, Ethiopia). API access: sign-up. [Docs](https://developer.jengahq.io/) · [Website](https://developer.jengahq.io/)
- **Kopo Kopo** (Kenya). API access: sign-up. [Docs](https://api-docs.kopokopo.com/)
  - SDK (JavaScript) - [kopokopo/k2-connect-node](https://github.com/kopokopo/k2-connect-node) (`official`)
  - SDK (PHP) - [kopokopo/k2-connect-php](https://github.com/kopokopo/k2-connect-php) (`official`)
  - SDK (Python) - [kopokopo/k2-connect-python](https://github.com/kopokopo/k2-connect-python) (`official`)
  - SDK (Ruby) - [kopokopo/k2-connect-ruby](https://github.com/kopokopo/k2-connect-ruby) (`official`)
- **M-Pesa Open API (Vodacom)** (Tanzania, DR Congo). API access: on request. [Docs](https://business.m-pesa.com/developers/) · [Website](https://openapiportal.m-pesa.com)
  - SDK (Laravel, PHP) - [tumainimosha/laravel-mpesa-push](https://github.com/tumainimosha/laravel-mpesa-push) (`community`)
  - SDK (Laravel, PHP) - [openpesa/laravel-pesa](https://github.com/openpesa/laravel-pesa) (`community`)
  - SDK (PHP) - [openpesa/php-pesa](https://github.com/openpesa/php-pesa) (`community`)
  - SDK (Python) - [Python Pesa](https://kalebu.github.io/python-pesa/) (`community`)
- **Mixx by Yas (formerly Tigo Pesa)** (Tanzania). API access: on request. [Website](https://www.yas.co.tz)
  - SDK (Laravel, PHP) - [tumainimosha/laravel-tigopesa-push](https://github.com/tumainimosha/laravel-tigopesa-push) (`community`)
  - SDK (Python) - [Kalebu/tigopesa](https://github.com/Kalebu/tigopesa) (`community`)
  - Plugin (PHP) - [devmedtz/whmcs-tigopesa](https://github.com/devmedtz/whmcs-tigopesa) (`community`)
- **NMB Bank** (Tanzania). API access: sign-up. [Docs](https://obp-portal-sandbox.nmbbank.co.tz/) · [Website](https://obp-portal-sandbox.nmbbank.co.tz/)
  - SDK (Python, Django) - [devmedtz/django-nmb](https://github.com/devmedtz/django-nmb) (`community`)
- **Pesapal** (Kenya, Uganda, Tanzania, Rwanda, Malawi, Zambia, Zimbabwe). API access: sign-up. [Docs](https://developer.pesapal.com/) · [Website](https://www.pesapal.com/)
- **Relworx** (Uganda, Kenya, Tanzania, Rwanda, DR Congo). API access: sign-up. [Docs](https://payments.relworx.com/docs/)
- **Safaricom Daraja (M-Pesa Kenya)** (Kenya). API access: sign-up. [Docs](https://developer.safaricom.co.ke) · [Website](https://developer.safaricom.co.ke)
- **Selcom** (Tanzania). API access: on request. [Docs](https://developers.selcommobile.com) · [Website](https://www.selcom.net)
  - SDK (Laravel, PHP) - [bryceandy/laravel-selcom](https://github.com/bryceandy/laravel-selcom) (`community`)
  - SDK (Laravel, PHP) - [selcom-developers/laravel-selcom](https://github.com/selcom-developers/laravel-selcom) (`community`)
  - SDK (C#) - [selcompaytechltd/selcom-apigw-client-cs](https://github.com/selcompaytechltd/selcom-apigw-client-cs) (`official`)
  - SDK (Java) - [selcompaytechltd/selcom-apigw-client-java](https://github.com/selcompaytechltd/selcom-apigw-client-java) (`official`)
  - SDK (JavaScript) - [selcompaytechltd/selcom-apigw-client-nodejs](https://github.com/selcompaytechltd/selcom-apigw-client-nodejs) (`official`)
  - SDK (PHP) - [selcompaytechltd/selcom-apigw-client-php](https://github.com/selcompaytechltd/selcom-apigw-client-php) (`official`)
  - SDK (Python) - [selcompaytechltd/selcom-apigw-client-python](https://github.com/selcompaytechltd/selcom-apigw-client-python) (`official`)
  - Plugin (PHP) - [selcompaytechltd/selcom-apigw-client-woocommerce](https://github.com/selcompaytechltd/selcom-apigw-client-woocommerce) (`official`)
  - Plugin (PHP) - [selcompaytechltd/selcom-apigw-client-wordpress](https://github.com/selcompaytechltd/selcom-apigw-client-wordpress) (`official`)
  - SDK (TypeScript, JavaScript) - [selcom-developers/selcom-node](https://github.com/selcom-developers/selcom-node) (`community`)
  - Tool (Language-agnostic) - [selcom-developers/selcom-spec](https://github.com/selcom-developers/selcom-spec) (`community`)
  - SDK (Java) - [selcom-developers/selcom4j](https://github.com/selcom-developers/selcom4j) (`community`)
  - SDK (Python) - [selcom-developers/selcompy](https://github.com/selcom-developers/selcompy) (`community`)
- **Tembo** (Tanzania, Kenya). API access: on request. [Docs](https://tembo.gitbook.io/tembo/introduction) · [Website](https://temboplus.com)
- **Yo! Payments** (Uganda). API access: on request. [Docs](http://paymentsweb.yo.co.ug/developers-api/) · [Website](http://paymentsweb.yo.co.ug/)
  - SDK (PHP) - [YO-Uganda/YoPayments-PHP8x](https://github.com/YO-Uganda/YoPayments-PHP8x) (`unknown`)
  - SDK (Python) - [YO-Uganda/YoPaymentsPython](https://github.com/YO-Uganda/YoPaymentsPython) (`unknown`)

## West Africa

- **Bictorys** (Senegal). API access: sign-up. [Docs](https://docs.bictorys.com/) · [Website](https://bictorys.com/)
- **CinetPay** (Côte d'Ivoire). API access: sign-up. [Docs](https://github.com/cinetpay) · [Website](https://github.com/cinetpay)
  - SDK (Dart) - [cinetpay/cinetpay-flutter](https://github.com/cinetpay/cinetpay-flutter) (`official`)
  - SDK (Go) - [cinetpay/cinetpay-go](https://github.com/cinetpay/cinetpay-go) (`official`)
  - SDK (TypeScript) - [cinetpay/cinetpay-js](https://github.com/cinetpay/cinetpay-js) (`official`)
  - SDK (PHP) - [cinetpay/cinetpay-php-sdk](https://github.com/cinetpay/cinetpay-php-sdk) (`official`)
  - SDK (Python) - [cinetpay/cinetpay-python](https://github.com/cinetpay/cinetpay-python) (`official`)
- **Djamo** (Côte d'Ivoire, Senegal). API access: on request. [Docs](https://docs.djamo.com/) · [Website](https://www.djamo.com/en-sn/api)
- **expressPay** (Ghana). API access: sign-up. [Docs](https://developers.expresspaygh.com/) · [Website](https://expresspaygh.com/)
- **FedaPay** (Benin, Togo, Côte d'Ivoire, Niger, Senegal). API access: sign-up. [Docs](https://docs.fedapay.com/fr/introduction/fedapay) · [Website](https://fedapay.com/)
  - SDK (JavaScript) - [fedapay/fedapay-node](https://github.com/fedapay/fedapay-node) (`official`)
  - SDK (PHP) - [fedapay/fedapay-php](https://github.com/fedapay/fedapay-php) (`official`)
  - SDK (JavaScript) - [fedapay/fedapay-reactjs](https://github.com/fedapay/fedapay-reactjs) (`official`)
- **Interswitch** (Nigeria). API access: open. [Docs](https://docs.interswitchgroup.com/docs/home) · [Website](https://developer.interswitchgroup.com/)
- **KKiaPay** (Benin). API access: sign-up. [Docs](https://docs.kkiapay.me/v1) · [Website](https://kkiapay.me/)
  - SDK (Dart) - [kkiapay/kkiapay-flutter-sdk](https://github.com/kkiapay/kkiapay-flutter-sdk) (`official`)
  - SDK (JavaScript) - [kkiapay/nodejs-sdk](https://github.com/kkiapay/nodejs-sdk) (`official`)
- **Monime** (Sierra Leone). API access: sign-up. [Docs](https://docs.monime.io/docs/get-started) · [Website](https://monime.io/)
- **Monnify** (Nigeria). API access: sign-up. [Docs](https://developers.monnify.com/) · [Website](https://monnify.com)
  - SDK (Java) - [Monnify/AndroidSDK](https://github.com/Monnify/AndroidSDK) (`official`)
  - SDK (Dart) - [Monnify/FlutterSDK](https://github.com/Monnify/FlutterSDK) (`official`)
  - SDK (Swift) - [Monnify/IOS-SDk](https://github.com/Monnify/IOS-SDk) (`official`)
  - SDK (JavaScript) - [Monnify/Monnify-Nodejs-lib](https://github.com/Monnify/Monnify-Nodejs-lib) (`official`)
  - SDK (PHP) - [Monnify/Monnify-PHP-SDK](https://github.com/Monnify/Monnify-PHP-SDK) (`official`)
  - SDK (JavaScript) - [Monnify/WebSDK](https://github.com/Monnify/WebSDK) (`official`)
- **Paga** (Nigeria). API access: on request. [Docs](https://developer-docs.paga.com/docs/business-rest-api) · [Website](https://www.mypaga.com/)
- **PayDunya** (Senegal, Benin, Côte d'Ivoire, Togo, Mali, Burkina Faso). API access: sign-up. [Docs](https://developers.paydunya.com/doc/FR/introduction) · [Website](https://paydunya.com/)
- **PayTech** (Senegal). API access: sign-up. [Docs](https://docs.intech.sn/) · [Website](https://paytech.sn/)
- **Remita** (Nigeria). API access: on request. [Docs](https://api.remita.net/) · [Website](https://remita.net/developers)
- **SeerBit** (Nigeria). API access: sign-up. [Docs](https://doc.seerbit.com/) · [Website](https://www.seerbit.com/)
  - SDK (Dart) - [seerbit/seerbit-flutter](https://github.com/seerbit/seerbit-flutter) (`official`)
  - SDK (PHP) - [seerbit/seerbit-laravel](https://github.com/seerbit/seerbit-laravel) (`official`)
  - SDK (JavaScript) - [seerbit/seerbit-nodejs](https://github.com/seerbit/seerbit-nodejs) (`official`)
  - SDK (JavaScript) - [seerbit/seerbit-reactjs](https://github.com/seerbit/seerbit-reactjs) (`official`)
- **Squad** (Nigeria). API access: sign-up. [Docs](https://docs.squadco.com/) · [Website](https://squadco.com/)
- **theTeller (PaySwitch)** (Ghana). API access: sign-up. [Docs](https://theteller.net/documentation) · [Website](https://theteller.net/)
- **Wave** (Senegal, Côte d'Ivoire). API access: on request. [Docs](https://docs.wave.com/business) · [Website](https://www.wave.com/en/business/index.html)

## Central Africa

- **CamPay** (Cameroon). API access: sign-up. [Docs](https://documenter.getpostman.com/view/2391374/T1LV8PVA)
  - SDK (Python) - [CamPay/campay-python-sdk](https://github.com/CamPay/campay-python-sdk) (`official`)
- **Notch Pay** (Cameroon). API access: sign-up. [Docs](https://developer.notchpay.co/) · [Website](https://notchpay.co)

## Southern Africa

- **DPO PayGate** (South Africa). API access: sign-up. [Docs](https://docs.paygate.co.za/paygate-by-network/) · [Website](https://www.paygate.co.za/)
- **EcoCash Open API** (Zimbabwe). API access: sign-up. [Docs](https://developers.ecocash.co.zw/) · [Website](https://ecocash.co.zw/)
- **iKhokha** (South Africa). API access: sign-up. [Docs](https://developer.ikhokha.com/) · [Website](https://www.ikhokha.com/ik-pay-api)
- **Ozow** (South Africa). API access: on request. [Docs](https://hub.ozow.com/) · [Website](https://ozow.com/)
- **PayChangu** (Malawi). API access: sign-up. [Docs](https://developer.paychangu.com/docs/welcome) · [Website](https://www.paychangu.com/)
- **Payfast** (South Africa). API access: sign-up. [Docs](https://developers.payfast.co.za/docs) · [Website](https://payfast.io/)
  - SDK (PHP) - [PayFast/payfast-common](https://github.com/PayFast/payfast-common) (`official`)
- **Paynow** (Zimbabwe). API access: sign-up. [Docs](https://developers.paynow.co.zw/) · [Website](https://www.paynow.co.zw/)
  - SDK (.NET) - [paynow/Paynow-DotNet-SDK](https://github.com/paynow/Paynow-DotNet-SDK) (`official`)
  - SDK (Java) - [paynow/Paynow-Java-SDK](https://github.com/paynow/Paynow-Java-SDK) (`official`)
  - SDK (Node.js) - [paynow/Paynow-NodeJS-SDK](https://github.com/paynow/Paynow-NodeJS-SDK) (`official`)
  - SDK (PHP) - [paynow/Paynow-PHP-SDK](https://github.com/paynow/Paynow-PHP-SDK) (`official`)
  - SDK (Python) - [paynow/Paynow-Python-SDK](https://github.com/paynow/Paynow-Python-SDK) (`official`)
- **Peach Payments** (South Africa). API access: sign-up. [Docs](https://developer.peachpayments.com/docs/product-portfolio-overview) · [Website](https://www.peachpayments.com/)
- **Stitch** (South Africa). API access: sign-up. [Docs](https://docs.stitch.money/) · [Website](https://stitch.money/)
- **Yoco** (South Africa). API access: sign-up. [Docs](https://developer.yoco.com/) · [Website](https://www.yoco.com/za/)

## North Africa

- **Chargily Pay** (Algeria). API access: sign-up. [Docs](https://dev.chargily.com/pay-v2/introduction) · [Website](https://chargily.com/)
  - SDK (Go) - [Chargily/chargily-pay-go](https://github.com/Chargily/chargily-pay-go) (`official`)
  - SDK (JavaScript) - [Chargily/chargily-pay-javascript](https://github.com/Chargily/chargily-pay-javascript) (`official`)
  - SDK (PHP) - [Chargily/chargily-pay-php](https://github.com/Chargily/chargily-pay-php) (`official`)
  - SDK (Python) - [Chargily/chargily-pay-python](https://github.com/Chargily/chargily-pay-python) (`official`)
- **Fawry** (Egypt). API access: on request. [Docs](https://developers.fawrystaging.com/fawrypay/gettingStarted) · [Website](https://www.fawry.com/)
- **Flouci** (Tunisia). API access: on request. [Docs](https://docs.flouci.com/introduction) · [Website](https://flouci.com/fr)
- **Geidea** (Egypt). API access: sign-up. [Docs](https://docs.geidea.net/docs/overview) · [Website](https://www.geidea.net/ksa/en)
- **Kashier** (Egypt). API access: sign-up. [Docs](https://developers.kashier.io/) · [Website](https://www.kashier.io/)
- **Konnect** (Tunisia). API access: sign-up. [Docs](https://docs.konnect.network/docs/en/overview/getting-started) · [Website](https://konnect.network/)
- **Paymob** (Egypt). API access: sign-up. [Docs](https://developers.paymob.com/paymob-docs) · [Website](https://paymob.com/)
- **YouCan Pay** (Morocco). API access: sign-up. [Docs](https://docs.youcan.shop/youcan-pay/introduction) · [Website](https://youcanpay.com/)

## Pan-African

- **Airtel Money (Airtel Africa)** (Nigeria, Niger, Chad, Gabon, Congo, DR Congo, Kenya, Uganda, Rwanda, Tanzania, Zambia, Malawi, Madagascar, Seychelles). API access: sign-up. [Docs](https://developers.airtel.africa/documentation) · [Website](https://developers.airtel.africa/)
- **DPO Pay** (Kenya, Uganda, Tanzania, Rwanda, Ghana, Zambia, Namibia, Botswana). API access: sign-up. [Docs](https://docs.dpopay.com/dpo-pay-by-network) · [Website](https://dpogroup.com/)
  - SDK (Laravel, PHP) - [Zepson-Technologies/dpo-laravel](https://github.com/Zepson-Technologies/dpo-laravel) (`community`)
  - SDK (PHP) - [Zepson-Technologies/dpo-php](https://github.com/Zepson-Technologies/dpo-php) (`community`)
- **Flutterwave** (Nigeria, Ghana, Kenya, Uganda, Tanzania, Rwanda, Zambia, Malawi, South Africa, Egypt, Senegal, Cameroon, Côte d'Ivoire, Mali). API access: sign-up. [Docs](https://developer.flutterwave.com/docs) · [Website](https://flutterwave.com)
  - SDK (Dart) - [Flutterwave/Flutter-v3](https://github.com/Flutterwave/Flutter-v3) (`official`)
  - SDK (Java) - [Flutterwave/Java-v3](https://github.com/Flutterwave/Java-v3) (`official`)
  - SDK (JavaScript) - [Flutterwave/Node-v3](https://github.com/Flutterwave/Node-v3) (`official`)
  - SDK (PHP) - [Flutterwave/PHP-v3](https://github.com/Flutterwave/PHP-v3) (`official`)
  - SDK (Python) - [Flutterwave/Python-v2](https://github.com/Flutterwave/Python-v2) (`official`)
  - SDK (TypeScript) - [Flutterwave/React-v3](https://github.com/Flutterwave/React-v3) (`official`)
- **Kora (formerly Korapay)** (Nigeria, Ghana, Kenya, South Africa, Tanzania, Côte d'Ivoire). API access: sign-up. [Docs](https://developers.korapay.com/) · [Website](https://www.korahq.com/)
- **MTN MoMo** (Uganda, Ghana, Côte d'Ivoire, Zambia, Cameroon, Benin, Congo, Eswatini, Guinea, South Africa, Liberia). API access: sign-up. [Docs](https://momodeveloper.mtn.com/) · [Website](https://momodeveloper.mtn.com/)
- **Orange Money** (Mali, Cameroon, Côte d'Ivoire, Senegal, Madagascar, Botswana, Guinea, Guinea-Bissau, Sierra Leone, DR Congo, Central African Republic). API access: on request. [Docs](https://developer.orange.com/apis/om-webpay) · [Website](https://developer.orange.com/products/payment/)
- **Paystack** (Nigeria, Ghana, South Africa, Kenya, Côte d'Ivoire). API access: sign-up. [Docs](https://paystack.com/docs/) · [Website](https://paystack.com)
  - SDK (Dart) - [PaystackOSS/paystack_flutter](https://github.com/PaystackOSS/paystack_flutter) (`official`)
  - SDK (Swift) - [PaystackHQ/paystack-sdk-ios](https://github.com/PaystackHQ/paystack-sdk-ios) (`official`)
  - SDK (TypeScript) - [PaystackOSS/paystack-node](https://github.com/PaystackOSS/paystack-node) (`official`)
  - SDK (PHP) - [PaystackOSS/paystack-php](https://github.com/PaystackOSS/paystack-php) (`official`)
  - SDK (Python) - [PaystackOSS/paystack-python](https://github.com/PaystackOSS/paystack-python) (`official`)
- **Tingg (Cellulant)** (Kenya, Tanzania, Nigeria, Ghana, Uganda). API access: on request. [Docs](https://docs.tingg.africa) · [Website](https://tingg.africa)

## Tools

- **Sanwo** (Nigeria, Ghana, South Africa, Kenya). SDK (TypeScript, JavaScript, Dart, Swift, Kotlin) - [Sanwo](https://github.com/Sanwohq) (`community`)

<!-- catalogue:end -->

## Contributing

1. Add or update one YAML record in [`data/`](data/), following [`data/SCHEMA.md`](data/SCHEMA.md).
2. Check every link and set `last_verified`.
3. Optionally, run `npm run readme` in `website/` to refresh the list above.
4. Open a pull request.

Listings are checked by hand. Always confirm fees, coverage and terms with the provider.

## Licence

[MIT](LICENSE)
