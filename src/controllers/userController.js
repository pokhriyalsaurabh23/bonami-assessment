const userService = require('../services/userservice');

async function createUser(req, res) {
    try {
        const { name, email, gender } = req.body;
        const user = await userService.createUser(name, email, gender);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getUserByEmail(req, res) {
    try {
        const user = await userService.getUserByEmail(req.params.email);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createUser,
    getUserByEmail,
};
