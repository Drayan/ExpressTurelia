/**
 * Created by Michaël on 2/1/14.
 */

var routes = require('../routes');

exports.createRoutes = function(app) {
    //we'll define our routes here.

    app.get('/', routes.index);
    app.get('/about', routes.about);
    app.get('/player', routes.player);
    app.get('/logout', routes.user('logout'));
    app.get('/user/create', routes.user('create'));

    app.post('/login', routes.user('login'));
    app.post('/character/list', routes.character('list'));
};