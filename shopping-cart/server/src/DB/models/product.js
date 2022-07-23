const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    deliveryDate: {
        type: String,
        required: true
    },
    sellerAddress: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('product', Product);