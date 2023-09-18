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
    });

    console.log('something');

    // res.send('respond from user add')
});


router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
    // res.send('respond from user getall')
});

//: denotes url parameter
router.get('/getbyemail/:email', (req, res) => {

    console.log(req.params.email);

    Model.find({email : req.params.email})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
})

router.get('/getbyid/:id', (req, res) => {
        Model.findById(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.json(err);
    });

    // res.send('respond from user getbyid')
});

router.put('/update/:id', (req, res) => {
        Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
    // res.send('respond from user update')
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.json(err);
    });
    // res.send('respond from user delete')
});


module.exports = router;