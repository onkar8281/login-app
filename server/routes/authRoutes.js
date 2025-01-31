import express from 'express';
import bcrypt from 'bcrypt';
import db from '../db.js';  // Go one level up from routes to the root


const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if all fields are provided
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    // Check if the email already exists in the database
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length > 0) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
        db.query(query, [username, email, hashedPassword], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Error registering user' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
});

export default router;