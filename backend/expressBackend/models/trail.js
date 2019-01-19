var mongoose = require('mongoose');
var trailSchema = mongoose.Schema({
    name: {type: String},
    distance: {type: String},
    elevationGain: {type: String},
    description: {type: String}
})

module.exports = mongoose.model('Trail', trailSchema)