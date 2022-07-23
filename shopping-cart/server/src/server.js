const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const { createConnection } = require('./DB/connect');

createConnection();

const user = require('./routes/user');
const product = require('./routes/product');
const auth = require('./routes/auth');
const cart = require('./routes/cart');

app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + './../public/images'));

app.use('/auth', auth);

app.use('/users', user);
app.use('/products', product);
app.use('/cart', cart);

app.get('/', (req, res) => res.send("not a valid path"));


app.listen(process.env.PORT, () => {
    console.log('server is running...');
});