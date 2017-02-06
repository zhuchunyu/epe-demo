const express = require('express');
const router = express.Router();

const config = require('../config');
const rp = require('request-promise');

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
    
    req.session.user = {status:'logined'};
    
    res.render('index', {title: 'DEMO', rows:rows});
});

router.get('/category', async function (req, res, next) {
    console.log('session:', req.session.user);
    res.render('index', {title: 'DEMO'});
});

router.get('/category/json', async function (req, res, next) {
    let [rows, fields, error] = await config.mysql2Pool
        .query('select * from test')
        .catch(function (err) {
            return [null, null, err];
        });
    if (error) {
        //错误处理
        console.log(error.toString());
        next();
        return;
    }
    res.json({status:true, data: rows});
});

router.get('/request', async function (req, res, next) {
    let data = await rp({url:'http://127.0.0.1:3000/category/json', json:true}).catch(function (err) {
        return {status:false, message:err.toString()};
    });
    
    res.json(data);
});

module.exports = router;
