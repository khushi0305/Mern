const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.send('respond from user add')
});


module.exports = router;