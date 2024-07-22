// Install with: npm i flutterwave-node-v3
const express = require("express");
const app = express();
const Flutterwave = require('flutterwave-node-v3');

const port = 8000;

const verifyTransaction = async (id) => {
    const flw = new Flutterwave("FLWPUBK_TEST-0f6335aff300d743e2c864258d738c41-X", "FLWSECK_TEST-a8f3957d1fbfe80dcae644bd8de05c80-X");
    const payload =  {id};

    try {
        const response = await flw.Transaction.verify(payload);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const tokenizedCharge = async (token,email) =>{
    const flw = new Flutterwave("FLWPUBK_TEST-0f6335aff300d743e2c864258d738c41-X", "FLWSECK_TEST-a8f3957d1fbfe80dcae644bd8de05c80-X");
    const details = {
        token: token,
        currency: "NGN",
        country: "NG",
        amount: 24000,
        email: email,
        tx_ref: "tx_ref11eghudmm,o",
        narration: "Payment for monthly magazine subscription",
    };
    await flw.Tokenized.charge(details);
}

// test@mailinator.com
app.get('/verify/:id', async (req, res) => {
    const transactionId = req.params.id;
    try {
        const response = await verifyTransaction(transactionId);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send("Error verifying transaction");
    }
});

app.get('/payMonth', async (re,res) =>{
 try{
    const response = await tokenizedCharge("flw-t1nf-63df8e0ee480bd4dc7d0bb016cd5ab6a-m03k","test@mailinator.com")
    res.status(200).send(response);
 } catch (err){
    res.status(500).send(err);
 }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


// app.get('/', (req,res) =>{
//     flw.Transaction.verify({ id: "6490625" })
//     .then((response) => {
//         console.log(response);
//         // if (
//         //     response.data === "successful"
//         //     && response.data.amount === expectedAmount
//         //     && response.data.currency === expectedCurrency) {
                
//         //     // Success! Confirm the customer's payment
//         //     res.status(200).send(response.data);
//         // } else {
//         //     // Inform the customer their payment was unsuccessful
//         // }
//     })
//     .catch(console.log);
//    res.status(200).send('hi')
// })

// const flw = new Flutterwave("FLWPUBK_TEST-0f6335aff300d743e2c864258d738c41-X", "FLWSECK_TEST-a8f3957d1fbfe80dcae644bd8de05c80-X");
