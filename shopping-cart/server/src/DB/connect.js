const mongoose = require('mongoose');

async function createConnection() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('connected with DB');
    } catch(error) {
        console.log('error received while connecting with DB ', error);
    }
}

module.exports = {
    createConnection
}