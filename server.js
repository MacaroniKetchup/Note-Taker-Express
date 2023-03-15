// Dependancies
const express = require("express");
const fs = require("fs");
const path = require('path');
// Initializing
const app = express();
const PORT = process.env.PORT || 3001;
// Setting up Data Parsing
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.static(__dirname));
// Requiring route.js file
require('./routes/routes')(app);
// PORT Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: 🏍️ " + PORT);
})
