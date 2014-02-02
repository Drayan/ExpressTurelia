/**
 * Created by Michaël on 2/02/14.
 */

exports.login = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    if(usename == 'Drayan' || username == 'drayan') {
        if(password == '123456')
        {
            req.session.authenticated = true;
            res.send(200, "You're log in!");
        } else {
            res.send(400, "Wrong password.");
        }
    } else {
        res.send(404, "User not found.");
    }
};