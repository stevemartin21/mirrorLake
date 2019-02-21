var mongoose = require('mongoose');
var campgroundSchema = mongoose.Schema({
    name: {type: String},
    spot: {type: String},
    description: {type: String},
    parking: {type: Boolean},
    rv: {type: Boolean},
    campgrounds: {type: Boolean}
})

module.exports = mongoose.model('Campground', campgroundSchema)