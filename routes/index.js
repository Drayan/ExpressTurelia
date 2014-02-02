
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

exports.login = function(req, res) {
    return controllers.callController('user', 'login', req, res);
};

exports.logout = function(req, res) {
    return controllers.callController('user', 'logout', req, res);
}

exports.player = function(req, res) {
    return controllers.callController('player', 'index', req, res);
}