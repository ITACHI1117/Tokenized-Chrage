// Install with: npm i flutterwave-node-v3

const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave("FLWPUBK_TEST-0f6335aff300d743e2c864258d738c41-X", "FLWSECK_TEST-a8f3957d1fbfe80dcae644bd8de05c80-X");
const details = {
    token: "lw-t1nf-63df8e0ee480bd4dc7d0bb016cd5ab6a-m03k",
    currency: "NGN",
    country: "NG",
    amount: 24000,
    email: user.email,
    tx_ref: "tx_ref11eghudmm,o",
    narration: "Payment for monthly magazine subscription",
};
await flw.Tokenized.charge(details);