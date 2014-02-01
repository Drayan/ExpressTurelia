/**
 * Created by Michaël on 2/1/14.
 */

var routes = require('../routes');

exports.createRoutes = function(app) {
    //we'll define our routes here.

    app.get('/', routes.index);
};