/**
 * Created by Michaël on 2/1/14.
 */

var routes = require('../routes');

exports.createRoutes = function(app) {
    //we'll define our routes here.

    app.get('/', routes.index);
    app.get('/player', routes.player);
    app.get('/logout', routes.logout);

    app.post('/login', routes.login);
};