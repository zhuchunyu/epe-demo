var mysql = require('mysql');
let mysql2 = require('mysql2/promise');

var mysqlPool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'demo'
});

var mysql2Pool = mysql2.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'demo'
});

module.exports = {mysqlPool:mysqlPool, mysql2Pool:mysql2Pool};