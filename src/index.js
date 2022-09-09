const express = require('express');
// FAKE DATABASE
let regioes = [];
//CRIAR O APP
const app = express();

app.use(express.json());

app.post("/regioes", (req, res) => {
    const { nome, populacaoT, eleitores,generos,faixaet,graudeins  } = req.body
    const regiao = {nome, populacaoT, eleitores,generos,faixaet,graudeins}
    regioes.push(regiao)
    return res.status(201).json(regiao)
})
// APPLICAR MIDDLEWARES
app.listen(3335, ()  => console.log('run'))
//MANDAR O SERVIDOR RODAR