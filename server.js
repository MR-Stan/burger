// npm express
const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

// use static content from public
app.use(express.static("public"));

// parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// npm express handlebars
const exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require('./controllers/burgers_controller.js');

app.use(routes);

// start server
app.listen(PORT, function () {
    console.log('Server listenting on: http://localhost:' + PORT);
});


