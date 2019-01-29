var mongoose = require('mongoose');
var campgroundSchema = mongoose.Schema({
    name: {type: String},
    spots: {type: String},
    description: {type: String}
})

module.exports = mongoose.model('Campground', campgroundSchema)