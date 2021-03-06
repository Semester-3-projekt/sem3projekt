var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var http = require('http');
var request = require('request');


/* GET home page. */
router.get('/', function(req, res) {
  res.redirect("app/index.html")
});

router.post('/authenticate', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    console.log("username: " + username);
    console.log("password: " + password);

    var user = {
       // uri: 'http://localhost:8080/connect/'+username+'+'+password,
       uri: 'http://137.135.176.226/connect/'+username+'+'+password,
        method: 'get'
};
    request(user, function(error, response, body){
        console.log(body);
        switch(body){
            case '"teacher"':
                var profile = {
                    username: req.body.username,
                    role: 'admin'
                };
                var token = jwt.sign(profile, require("../security/secrets").secretTokenAdmin, { expiresInMinutes: 60*5 });
                res.json({ token: token });
                break;

            case '"student"':
                var profile = {
                    username: req.body.username,
                    role: 'student'
                };
                var token = jwt.sign(profile, require("../security/secrets").secretTokenUser, { expiresInMinutes: 60*5 });
                res.json({ token: token });
                break;

            case '"fail"':
                res.status(401).send('User not found');
                break;
            case '"false"':
                res.status(401).send('wrong Username or Password');
                break;
        }
    })
});

module.exports = router;