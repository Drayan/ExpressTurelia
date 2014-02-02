/**
 * Created by Michaël on 2/02/14.
 */

exports.callController = function(controller, action, req, res) {
    require('./' + controller)[action](req, res);
}