/**
 * Created by Michaël on 2/02/14.
 */

var User = require('../model/User');
var _ = require('underscore');

module.exports = {
    login: function(req, res) {
        var username = req.body.username;
        var password = req.body.password;

        User.findOne({username: username}, function(err, user) {
            if(err) {
                res.send(500, "Database error : " + err);
            } else {
                if(!_.isEmpty(user)) {
                    if(user.password === password) {
                        req.session.user = user;
                        req.session.authenticated = true;

                        res.location('/player');
                        res.redirect('/player');
                    } else {
                        res.send(400, 'Wrong password.');
                    }
                } else {
                    res.send(404, 'User ' + username + ' not found.');
                }
            }
        });
    },

    logout: function(req, res) {
        if(req.session.authenticated) {
            delete req.session.authenticated;
            delete req.session.user;
            res.location('/');
            res.redirect('/');
        }
    },

    create: function(req, res) {
        if(!req.session.authenticated) {
            var user = new User({ 'username': 'test', 'password': 'test'});
            user.save(function (err) {
                if(err) {
                    //Verify if it's a ValidationError
                    if(err.name && err.name == "ValidationError") {
                        //TODO: Make a better way to handle ValidationError.
                        res.send(500, "Validation errors : " + JSON.stringify(err.errors));
                    } else {
                        res.send(500, "Server error : " + err);
                    }
                } else {
                    res.send(200, 'Default user created');
                }
            });
        }
    }
};