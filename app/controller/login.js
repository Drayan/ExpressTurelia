/**
 * Created by Michaël on 2/02/14.
 */

module.exports = {
    index:  function(req, res) {
        var username = req.body.username;
        var password = req.body.password;

        if(username === 'Drayan' || username === 'drayan') {
            if(password == '123456')
            {
                req.session.authenticated = true;

                res.location('/player');
                res.redirect('/player');
            } else {
                res.send(400, "Wrong password.");
            }
        } else {
            res.send(404, "User not found.");
        }
    }
};