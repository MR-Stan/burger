require('dotenv').config();

const keys = require('../keys.js');

const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: keys.server.password,
        database: 'burger_db'
    })
};


// connection.connect(function (err) {
//     if (err) {
//         console.log(err.stack);
//         return;
//     }
//     console.log('Connected as id: ' + connection.threadId);
// });

module.exports = connection;