var ejs = require('ejs');
var mysql = require('mysql');

// Put your mysql configuration settings - user, password, database and port
function getConnection() {
    var connection = mysql.createConnection({
        host : 'tenant1.ctjqiypguai3.us-west-2.rds.amazonaws.com',
        user : 'tenant1',
        password : 'tenant123',
        database : 'tenant',
        port : 9001
    });
    return connection;
}

function fetchData(callback, sqlQuery) {

    console.log("\nMy SQL Query:" + sqlQuery);

    var connection = getConnection();



    connection.query(sqlQuery, function(err, rows, fields) {
        if (err) {
            console.log("ERROR: " + err.message);
            connection.end();
        } else { // return err or result
            console.log("DB Results:" + rows);
            connection.end();
            callback(err, rows);
        }
    });
    console.log("\nConnection closed...");

}

exports.fetchData = fetchData;