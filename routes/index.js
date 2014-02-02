
/*
 * GET home page.
 */

var controllers = require('../app/controller');

exports.index = function(req, res){
    if(!req.session.authenticated) {
        res.render('index', { title: 'Express' });
    } else {
        res.render('game/player');
    }
};

exports.player = function(req, res) {
    return controllers.callController('player', 'index', req, res);
};

exports.user = function(action) {
    return function(req, res) {
        return controllers.callController('user', action, req, res);
    }
};