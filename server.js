// Server.js - Running the Node/Express Server

// Declare dependencies
var express  = require('express');
var sequelize = require('sequelize');
var bodyParser   = require('body-parser');

var app      = express();
var PORT     = process.env.PORT || 8080;

// Require Models
var db = require("./models");



// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static(__dirname + "/public"));

// User Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }));

// Routes ======================================================================
require('./routes/api-routes.js')(app);
// require('./routes/pet-api-routes.js')(app);
require("./routes/html-routes.js")(app);


// Launch ======================================================================
db.sequelize.sync({force: false}).then(function() {
    app.listen(PORT, function() {
    console.log("The magic happens on PORT" + PORT);
    });
});






