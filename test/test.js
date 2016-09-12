var mongoose = require("mongoose");
var Users = require('../server/api/users/user_model');

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/server');
var should = chai.should();

chai.use(chaiHttp);


describe('/GET users', () => {
    it('it should GET all the users', (done) => {
        chai.request(server)
            .get('/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
    it('it should POST a new user', (done) => {
        chai.request(server)
            .post('/users')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

describe('/GET users', () => {
    it('it should GET a single user', (done) => {
        chai.request(server)
            .get('/users/:username')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });



    it('it should UPDATE a single the user', (done) => {
        chai.request(server)
            .put('/users/:username')
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });



    it('it should DELETE a single', (done) => {
        chai.request(server)
            .delete('/users/:username')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
