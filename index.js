const express = require('express');
const app = express();
app.use(express.json());

app.get('/webhook', (req, res) => {
    const verifyToken = "TOKEN_SECRETO";

    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token === verifyToken) {
        return res.status(200).send(challenge);
    }
    return res.sendStatus(403);
});

app.post('/webhook', (req, res) => {
    console.log("Mensagem recebida:", JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("Webhook rodando na porta 3000");
});
