var mongoose = require('mongooose');
var attractionSchema = mongoose.Schema({
    name: {type: String},
    image: {type: String},
    description: {type: String}

})

module.exports = mongoose.mode('Attraction', attractionSchema)