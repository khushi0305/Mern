const express = require('express');
const { Model } = require('mongoose');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(body.req);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})

router.get('/getall', (req, res) => {
    res.send('response from product getall')
})

router.get('/getbyid', (req, res) => {
    res.send('response from product getbyid')
})
router.get('/delete', (req, res) => {
    res.send('response from product delete')
})

module.exports = router;