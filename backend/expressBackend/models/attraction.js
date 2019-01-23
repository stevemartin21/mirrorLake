var mongoose = require('mongoose');
var attractionSchema = mongoose.Schema({
    name: {type: String},
    image: {type: String},
    description: {type: String}

})

module.exports = mongoose.model('Attraction', attractionSchema)