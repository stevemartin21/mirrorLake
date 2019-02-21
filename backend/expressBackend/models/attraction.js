var mongoose = require('mongoose');
var attractionSchema = mongoose.Schema({
    name: {type: String},
    image: {type: String},
    description: {type: String},
    hike: {type: String},
    parking: {type: Boolean},
    rv: {type: Boolean},
    campgrounds: {type: Boolean},
    type: {type: String}

})

module.exports = mongoose.model('Attraction', attractionSchema)

