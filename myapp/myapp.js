const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000
app.get('/', function (req, res) {
res.send('Marimar auuu!');
});
app.listen(3200, () => {
console.log(`Exemplo app node rodando no endereço
http://localhost:${port}`)
});