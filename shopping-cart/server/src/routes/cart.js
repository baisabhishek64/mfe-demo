const { Router } = require('express');
const { add, get, remove } = require('../controllers/cart');

const router = Router();

router.post('/add', add);
router.post('/remove', remove);
router.get('/get', get);

module.exports = router;