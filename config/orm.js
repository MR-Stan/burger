const connection = require('./connection.js');

const orm = {
    // select all information from a given table
    selectAll = function (table, cb) {
        let sqlQuery = "SELECT * FROM " + table + ";";
        connection.query(sqlQuery, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    //
    insertOne = function () {

    },
    //
    updateOne = function () {

    }
}

module.exports = orm;