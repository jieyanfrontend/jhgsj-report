let mysql = require('mysql');
let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'lifuzhao1995',
    database: 'jh_mini'
});

module.exports = pool;