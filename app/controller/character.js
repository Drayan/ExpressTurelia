/**
 * Created by Michaël on 2/3/14.
 */
module.exports = {
    list: function(req, res) {
        //Curently send only empty slots.
        //TODO: Fetch the data from the db.
        res.json({
            slots: [{
                id: 0,
                character: 'none'
            },
            {
                id: 1,
                character: 'none'
            },
            {
                id: 2,
                character: 'none'
            },
            {
                id: 3,
                character: 'none'
            },
            {
                id: 4,
                character: 'none'
            },
            {
                id: 5,
                character: 'none'
            },
            {
                id: 6,
                character: 'none'
            },
            {
                id: 7,
                character: 'none'
            }]
        });
    }
};