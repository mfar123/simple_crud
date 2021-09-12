var express = require('express')
var app = express()

app.get('/', function(req,res){
    res.send('RESTful API - Pplware')
})

var user = [
{id: 1, username: 'Fulano',email: 'fulano@gmail.com'},
{id: 2, username: 'Ciclano',email: 'ciclano@gmail.com'}
]

app.get('/api/listaUsers', function(req,res,next){
    res.send(users)
})

app.listen(8888)

