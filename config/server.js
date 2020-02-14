var express = require('express');
var consign = require('consign');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

//aqui o consign esta pegando já todos os arquivos da pasta 'routes' e passando essas rotas para o app
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;