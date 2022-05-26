// File to ser configs for server

// Get express module and call function express()
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

// Set EJS for view engine
app.set('view engine', 'ejs');
app.set('views', './app/views'); // Path where the server is called

app.use(bodyParser.urlencoded({ extended: true }));

// With consign 
consign()
    .include('./app/routes')
    .then('config/dbConnection.js') // Connection module in consign
    .then('./app/models') // Include models to mySql connections/queries
    .into(app);

module.exports = app;