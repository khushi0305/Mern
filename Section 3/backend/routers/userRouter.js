const express = require('express');                           //importing
const Model = require('../models/userModel');
const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    })


    // res.send('respond from user add')
});


router.get('/getall', (req, res) => {
    res.send('respond from user getall')
});

router.get('/getbyid', (req, res) => {
    res.send('respond from user getbyid')
});

router.get('/update', (req, res) => {
    res.send('respond from user update')
});

router.get('/delete', (req, res) => {
    res.send('respond from user delete')
});


module.exports = router;