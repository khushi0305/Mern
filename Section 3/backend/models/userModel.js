const {Schema, model} = require('../connection');

const myschema = new Schema({
    name : String,
    email : String,
    password : String,
    // phNo: String,
    // username: String
});

module.exports = model('users', myschema);