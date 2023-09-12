const express = require('express');

const product = express.Router();

product.get('/add', (req, res) => {
    res.send('response from product add')
})

product.get('/getall', (req, res) => {
    res.send('response from product getall')
})

product.get('/getbyid', (req, res) => {
    res.send('response from product getbyid')
})
product.get('/delete', (req, res) => {
    res.send('response from product delete')
})

module.exports = product;