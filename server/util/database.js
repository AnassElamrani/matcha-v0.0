const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '10.12.100.184:', // ip of docker machine
    // port: '3306',
    user: 'anass',
    database: 'Matcha',
    password: '0633'
});

module.exports = pool.promise();