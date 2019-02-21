var mongoose = require('mongoose');
var lakeSchema = mongoose.Schema({
    name: {type: String},
    size: {type: String},
    image: {type: String},
    description: {type: String},
    sizeDesc: {type: String},
    hike: {type: String},
    parking: {type: Boolean},
    rv: {type: Boolean},
    campgrounds: {type: Boolean},


})

module.exports = mongoose.model('Lake', lakeSchema);

