const connection = require('./connection.js');

// connect to db
connection.connect(function (err) {
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

const orm = {
    // select all information from a given table
    selectAll = function (table, callback) {
        let sqlQuery = "SELECT * FROM " + table + ";";
        connection.query(sqlQuery, function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    //
    insertBurger = function (table, burger_name, callback) {
        let sqlQuery = "INSERT INTO " + table + "VALUES (" + burger_name + ");";
        console.log(sqlQuery);
        connection.query(sqlQuery, function (err, res) {
            if (err) throw err;
            callback(res);
        });
    },
    //
    updateBurger = function (id, callback) {
        connection.query("UPDATE burgers SET ? WHERE ?",
            [{ devoured: true }, { id: id }],
            function (err, result) {
                if (err) throw err;
                callback(res);
            });
    }
}

module.exports = orm;