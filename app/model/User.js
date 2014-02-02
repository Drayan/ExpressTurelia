/**
 * Created by Michaël on 2/2/14.
 */
var mongoose = require('mongoose');
var unique = require('mongoose-unique-validator');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        require: "{PATH} is a required field.",
        unique: true
    },
    password: {
        type: String,
        require: "{PATH} is a required field."
    },
    email: {
        type: String,
        require: "{PATH} is a required field."
    }
});

userSchema.plugin(unique);

module.exports = mongoose.model('User', userSchema);