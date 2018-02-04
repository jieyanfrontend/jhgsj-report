let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lifuzhao1995',
    database: 'jh_mini'
});

module.exports = connection;