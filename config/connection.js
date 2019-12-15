require('dotenv').config();

const keys = require('../keys.js');

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: keys.server.password,
    database: 'burger_db'
});

connection.connect(function (err) {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log('Connected as id: ' + connection.threadId);
});

module.exports = connection;