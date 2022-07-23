async function login(req, res, next) {
    try {
        console.log('inside auth');
        // add auth here 
        res.send({access_token: "test token"});
    } catch(error) {
        next(error);
    }
}

module.exports = {
    login
}