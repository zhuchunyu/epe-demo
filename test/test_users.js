var request = require('supertest');
var should = require('should');

require('babel-core/register');
require("babel-core").transform("code", {
    plugins: ["transform-runtime"]
});

var app = require('../app');

describe('Users Page /', function () {
    
    before(function (done) {
        console.log('inited!');
        done();
    });
    
    it('Users Home sucess', function (done) {
        this.timeout(1000);
        request(app)
            .get('/users')
            .set('Accept', 'application/*')
            .expect('Content-Type', /text/)
            .end(function (err, res) {
                res.status.should.equal(200);
                console.log(res.text);
                done();
            });
    });
    
    it('Users List sucess', function (done) {
        this.timeout(1000);
        request(app)
            .get('/users/list')
            .set('Accept', 'application/*')
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                res.status.should.equal(200);
                console.log(res.body);
                should(err).not.be.ok();
                should(res.body).be.ok();
                should(res.body.status).be.ok();
                should(res.body.users).be.ok();
                done();
            });
    });
});
