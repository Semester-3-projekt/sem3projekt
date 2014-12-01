var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


/* GET home page. */
router.get('/', function(req, res) {
  res.redirect("app/index.html")
});

router.get('/authenticate', function(req, res){
    var username = req.body.username;
    var username = req.body.username;
    var user = {
        uri: 'http://somethingsomething:8080/connect/'+username+'+'+password,
        method: 'get'
    };
    request(user, function(error, response, body){
        switch(body){
            case 'teacher':
                var profile = {
                    username: req.body.username,
                    role: 'teacher'
                };
                var token = jwt.sign(profile, require("../security/secrets").secretTokenUser, { expiresInMinutes: 60*5 });
                res.json({ token: token });
                break;

            case 'student':
                var profile = {
                    username: req.body.username,
                    role: 'student'
                };
                var token = jwt.sign(profile, require("../security/secrets").secretTokenUser, { expiresInMinutes: 60*5 });
                res.json({ token: token });
                break;

            case 'fail':
                res.status(401).send('User not found');
                break;
            case 'false':
                res.status(401).send('wrong password');
                break;
        }
    })
});
module.exports = router;