var express = require('express');

var router = express.Router();
router.get('/test', function(req, res) {   //  test kaldes fra   view 2 "mgs"
    res.header("Content-type","application/json");
    res.end('{"msg" : "Test Message, You are logged on as a User since you could fetch this data"}');   // msg sendes til
});

module.exports = router;
