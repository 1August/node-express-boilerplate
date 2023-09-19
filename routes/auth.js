const express = require('express');
const router = express.Router();

// /api/auth/login
router.post('/login', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(404).json({message: 'Email or password is empty'})
    }
    return res.json({
        user: {
            id: 1,
            email,
            username: String(email).split('@')[0]
        },
        token: new Date().toISOString()
    })
});

// /api/auth/signup
router.post('/signup', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(404).json({message: 'Email or password is empty'})
    }
    return res.status(201).json({ message: 'Created' })
});

module.exports = router;
