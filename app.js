const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave("FLWPUBK_TEST-0f6335aff300d743e2c864258d738c41-X", "FLWSECK_TEST-a8f3957d1fbfe80dcae644bd8de05c80-X");
const details = {
    token: user.card_token,
    currency: "NGN",
    country: "NG",
    amount: 24000,
    email: user.email,
    tx_ref: this.generateTransactionReference(),
    narration: "Payment for monthly magazine subscription",
};
await flw.Tokenized.charge(details)