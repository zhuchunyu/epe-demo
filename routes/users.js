var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/list', function (req, res, next) {
    res.json({status:true, users:[1,2,3]});
});

module.exports = router;
