const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'nodejs',        // MYSQL USERNAME
    password : 'nodejs',    // MYSQL PASSWORD
    database : 'bech_de'      // MYSQL DB NAME
}).promise();
module.exports = dbConnection;
