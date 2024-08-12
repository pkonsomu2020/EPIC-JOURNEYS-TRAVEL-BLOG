const db = require('../db');

const isAuthenticated = (req, res, next) => {
    const userId = req.cookies.user_id;
    if (!userId) {
        return res.status(401).redirect('/login.html');
    }

    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [userId], (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).redirect('/login.html');
        }

        req.user = results[0];
        next();
    });
};

module.exports = { isAuthenticated };