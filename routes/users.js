const express = require('express');
const router = express.Router();

// /api/users
router.get('/', function (req, res, next) {
    const token = req.headers.authorization
    if (!token) {
        return res.status(404).json({message: 'Token required'})
    }

    res.json([
        {
            id: 1,
            email: 'response1@gmail.com',
            username: 'Server 1',
        },
        {
            id: 2,
            email: 'response2@gmail.com',
            username: 'Server 2',
        },
        {
            id: 3,
            email: 'response3@gmail.com',
            username: 'Server 3',
        }
    ])
});

// /api/users/:id
router.get('/:id', function (req, res, next) {
    const id = req.params.id
    const token = req.headers.authorization
    if (!token) {
        return res.json({message: 'Token required'}).status(404)
    }

    res.json({
        id,
        email: 'response@gmail.com',
        username: 'Server',
    })
});

module.exports = router;
