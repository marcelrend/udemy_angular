var express = require('express');
var router = express.Router();
//var User = require('../models/user');
router.get('/', function (req, res, next) {
    res.render('node');
});

//router.post('/', function(req, res, next) {
//    var email = req.body.email;
//    var user = new User({
//      firstName: 'Marcel',
//      lastName: 'Renders',
//      password: 'badmuts',
//      email: email
//    });
//    user.save();
//    res.redirect('/');
//});

module.exports = router;