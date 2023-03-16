// Dependancies
const express = require("express");
const fs = require("fs");
const path = require('path');
// Initializing
const app = express();
const PORT = process.env.PORT || 3001;
const routeApi = require('./routes/routeApi');
const routeHtml = require('./routes/routeHtml');
// Setting up Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', routeApi);
app.use('/', routeHtml);
// PORT Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: 🏍️ " + PORT);
})
