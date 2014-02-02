/**
 * Created by Michaël on 2/02/14.
 */

module.exports = {
    index: function(req, res) {
        console.log(req.session.authenticated);

        if(req.session.authenticated) {
            res.render('game/player')
        } else {
            res.send(300, "You are not authorized to view this page. Please, log in.");
        }
    }
}