var express = require('express')
var app = express.Router();

module.exports = app
    .use(function(req, res, next){
        res.write('This is provided by Nicholas Agneta at newpaltz.edu\r\n');
        next();
    })
    .get('/hello', function (req, res) {
        res.write('World');
        res.end();
    })
    .get('/goodby', function (req, res) {
        res.write('New Paltz');
        res.end();
    });
