const User = require('../DB/models/user');

async function addUser(req, res, next) {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password});
        const result = await user.save();
        res.send(result);
    } catch(error) {
        next(error);
    }
}

async function getUser(req, res, next) {
    try {
        const { id } = req.param;
        const result = await User.findOne({id})
        res.send(result);
    } catch(error) {
        next(error);
    }
}

async function getUsers(req, res, next) {
    try {
        const users = await User.find({});
        res.send(users);
    } catch(error) {
        next(error);
    }
}

module.exports = {
    getUser,
    getUsers,
    addUser
}