
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

exports.about = function(req, res) {
    return res.render('about');
}

exports.player = function(req, res) {
    return controllers.callController('player', 'index', req, res);
};

exports.user = function(action) {
    return function(req, res) {
        return controllers.callController('user', action, req, res);
    }
};

exports.character = function(action) {
    return function(req, res) {
        return controllers.callController('character', action, req, res);
    }
}