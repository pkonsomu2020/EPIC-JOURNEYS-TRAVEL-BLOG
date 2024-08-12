const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3800;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Serve static files
app.use(express.static(path.join(__dirname, '../')));

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../contact.html'));
});

app.get('/blogs', (req, res) => {
    res.sendFile(path.join(__dirname, '../blogs.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../signup.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../login.html'));
});

// MySQL connection setup
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

const pool = mysql.createPool(dbConfig);

// Test MySQL connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        process.exit(1); // Exit the Node.js process on database connection failure
    }
    console.log('Connected to MySQL database.');

    // Release the connection
    connection.release();
});

// Routes
app.use('/auth', require('./routes/auth'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;