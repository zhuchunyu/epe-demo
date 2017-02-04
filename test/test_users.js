var request = require('supertest');
var should = require('should');

require('babel-core/register');
require("babel-core").transform("code", {
    plugins: ["transform-runtime"]
});

var app = require('../app');

describe('Users Page /', function () {
    
    before(function (done) {
        new Promise(function (resolve) {
            console.log('initing...');
            resolve({});
        }).then(function (data) {
            console.log('inited!');
            done();
        });
    });
    
    it('respond sucess', function (done) {
        this.timeout(15000);
        request(app.listen())
            .get('/users')
            .set('Accept', 'application/*')
            .expect('Content-Type', /text/)
            .end(function (err, res) {
                res.status.should.equal(200);
                console.log(res.text);
                done();
            });
    });
});