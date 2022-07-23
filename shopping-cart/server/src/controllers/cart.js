
const Product = require('../DB/models/product')

let cart = [];

function add(req, res, next) {
    try {
        const { id } = req.body;
        cart.push(id);
        console.log(cart);
        res.send("added");
    } catch(error) {
        next(error);
    }
}

function remove(req, res, next) {
    try {
        const { id } = req.body;
        cart = cart.filter(pid => pid !== id);
        res.send("removed");
    } catch(error) {
        next(error);
    }
}

function get(req, res, next) {
    try {
        const results = [];
        cart.forEach(   id => {
            results.push( Product.findOne({_id: id}));
        })
        Promise.all(results).then(products => res.send(products));
    } catch(error) {
        next(error);
    }
}

module.exports = {
    add,
    get,
    remove
}