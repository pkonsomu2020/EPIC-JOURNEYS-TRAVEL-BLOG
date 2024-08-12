const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../db');

// Signup
router.post('/signup', async (req, res) => {
    const { fullname, email, psw } = req.body;
    const hashedPassword = await bcrypt.hash(psw, 8);

    const query = 'INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)';
    db.query(query, [fullname, email, hashedPassword], (err, results) => {
        if (err) {
            return res.status(500).send('Error saving the user');
        }
        res.redirect('/login.html');
    });
});


// Login Route
router.post('/login', (req, res) => {
    const { email, psw } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching the user');
        }

        if (results.length === 0 || !(await bcrypt.compare(psw, results[0].password))) {
            return res.status(401).send('Incorrect email or password');
        }

        // Set a cookie with the user's name
        res.cookie('user', { id: results[0].id, name: results[0].fullname }, { httpOnly: true });
        res.redirect('/');
    });
});


// Logout Route
router.get('/logout', (req, res) => {
    res.clearCookie('user');
    res.redirect('/');
});
module.exports = router;