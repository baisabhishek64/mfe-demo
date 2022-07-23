const { Router } = require('express');
const { getUser, getUsers, addUser} = require('../controllers/user');

const router = Router();

router.get('/:id', getUser);
router.get('/all', getUsers);

router.post('/add', addUser);

module.exports = router;