const mysql = require('mysql2');
require('dotenv').config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

const pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
    connection.release(); // Release the connection
});

module.exports = pool;