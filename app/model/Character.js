/**
 * Created by Michaël on 2/3/14.
 */
var mongoose = require('mongoose');
var unique = require('mongoose-unique-validator');

var characterSchema = mongoose.Schema({
    _id: {
        user: {
            type: mongoose.Schema.ObjectID
        },
        slot: {
            type: Number
        }
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    strength: {
        type: Number
    },
    dexterity: {
        type: Number
    },
    intelligence: {
        type: Number
    },
    health: {
        type: Number
    }
});

characterSchema.plugin(unique);

module.exports = mongoose.model('Character', characterSchema);