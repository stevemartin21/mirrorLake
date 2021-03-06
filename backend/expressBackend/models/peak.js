var mongoose = require('mongoose');
var peakSchema = mongoose.Schema({
    name: {type: String},
    elevation: {type: String},
    prominence: {type: String},
    description: {type: String},
    hike: {type: String},
    elevationGain: {type: String}
})

module.exports = mongoose.model('Peak' , peakSchema)