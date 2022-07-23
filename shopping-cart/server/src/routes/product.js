const { Router } = require('express');
const { getProduct, getProducts, addProduct, query} = require('../controllers/product');

const router = Router();

router.get('/query', query);
router.get('/all', getProducts);
router.get('/:id', getProduct);

router.post('/add', addProduct);

module.exports = router;