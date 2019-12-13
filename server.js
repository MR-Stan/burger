require('dotenv').config();

// npm express
const express = require('express');

// npm express handlebars
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 8080;

const routes = require('./controllers/burgers_controller.js');

const app = express();

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use static content from public
app.use(express.static("public"));

app.use(routes);

// start server
app.listen(PORT, function () {
    console.log('Server listenting on: http://localhost:' + PORT);
});


