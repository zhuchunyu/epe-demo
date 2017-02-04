var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    await new Promise(function (resolve) {
        console.log('promise ok!');
        resolve({});
    });
    res.render('index', {title: 'Express'});
});

module.exports = router;
