var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    await new Promise(function (resolve) {
        console.log('Promise ok!');
        resolve({});
    });
    res.render('index', {title: 'Express'});
});

module.exports = router;
