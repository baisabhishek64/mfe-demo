const Product = require('../DB/models/product');

async function addProduct(req, res, next) {
    try {
        const { name, deliveryDate, sellerAddress, image, price } = req.body;
        const product = new Product({ name, deliveryDate, sellerAddress, image, price });
        const result = await product.save();
        res.send(result);
    } catch(error) {
        next(error);
    }
}

async function getProduct(req, res, next) {
    try {
        const { id } = req.param;
        const result = await Product.findOne({id})
        res.send(result);
    } catch(error) {
        next(error);
    }
}

async function getProducts(req, res, next) {
    try {
        const users = await Product.find({});
        res.send(users);
    } catch(error) {
        next(error);
    }
}

async function query(req, res, next) {
    try {
        const { search } = req.query;
        const regex = new RegExp(search, 'i')
        const results = await Product.find({name: {$regex: regex}})
        res.send(results);
    } catch(error) {
        next(error);
    }
}

module.exports = {
    getProduct,
    getProducts,
    addProduct,
    query
}