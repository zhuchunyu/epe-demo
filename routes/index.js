const express = require('express');
const router = express.Router();

const config = require('../config');

/* GET home page. */
router.get('/', async function (req, res, next) {
    let [rows, fields, error] = await config.mysql2Pool
        .query('select * from test where id>?', [1])
        .catch(function (err) {
        return [null, null, err];
    });
    if (error) {
        //错误处理
        console.log(error.toString());
        next();
        return;
    }
    
    req.session.hello = "test hello";
    
    res.render('index', {title: '测试系统', rows:rows});
});

router.get('/category', async function (req, res, next) {
    console.log('session:', req.session.hello);
    res.render('index', {title: '测试系统'});
});

router.get('/category/json', async function (req, res, next) {
    res.json({title: '测试系统'});
});

module.exports = router;
