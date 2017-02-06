const request = require('supertest');
const should = require('should');

require('babel-core/register');
require("babel-core").transform("code", {
    plugins: ["transform-runtime"]
});

const app = require('../app');

describe('Index Page /', function () {
    
    before(function (done) {
        //init
        done();
    });
    
    it('主页', function (done) {
        this.timeout(1000);
        request(app)
            .get('/')
            .set('Accept', 'application/*')
            .expect('Content-Type', /html/)
            .end(function (err, res) {
                res.status.should.equal(200);
                //console.log(res.text);
                res.text.should.containEql('测试系统');
                res.text.should.not.containEql('Error').and.not.containEql('404');
                done();
            });
    });
    
    it('分类', function (done) {
        this.timeout(1000);
        request(app)
            .get('/category')
            .set('Accept', 'application/*')
            .expect('Content-Type', /html/)
            .end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
    });
    
    it('分类JSON', function (done) {
        this.timeout(1000);
        request(app)
            .get('/category/json')
            .set('Accept', 'application/*')
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                res.status.should.equal(200);
                console.log(res.body.status.should.equal(true));
                done();
            });
    });
    
    it('请求JSON', function (done) {
        this.timeout(5000);
        request(app)
            .get('/request')
            .set('Accept', 'application/*')
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                res.status.should.equal(200);
                console.log(res.body.status.should.equal(false));
                done();
            });
    });
});