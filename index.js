const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
const regex = /^[SsIiMm]/;

app.get('/response', (req, res) => {
  const answer = req.body.answer;
  if (regex.test(answer)) {
    res.status(200).send('Sucesso');
  } else {
    res.status(400).send('Erro');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});