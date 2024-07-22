const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave("FLWPUBK_TEST-0f6335aff300d743e2c864258d738c41-X", "FLWSECK_TEST-a8f3957d1fbfe80dcae644bd8de05c80-X");
const payload = {"id": "288200108"};

f
const response = await flw.Transaction.verify(payload)

fetch(`https://api.flutterwave.com/v3/transactions/${id}{/verify`)