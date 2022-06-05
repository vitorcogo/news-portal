// File to ser configs for server

// Get express module and call function express()
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

// Set EJS for view engine
app.set('view engine', 'ejs');
app.set('views', './app/views'); // Path where the server is called

// Midlewares
app.use(express.static('./app/public')); // Set static files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// With consign 
consign()
    .include('./app/routes')
    .then('config/dbConnection.js') // Connection module in consign
    .then('./app/models') // Include models to mySql connections/queries
    .then('./app/controllers') // Include controllers
    .into(app);

module.exports = app;