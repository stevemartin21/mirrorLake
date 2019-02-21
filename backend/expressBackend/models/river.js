var mongoose = require('mongoose');
var riverSchema = mongoose.Schema({
    name: {type: String},
    image: {type: String},
    description: {type: String},
    sizeDesc: {type: String},
    type: {type: String},
    length: {type: String},
    origin: {type: String}

})

module.exports = mongoose.model('River', riverSchema)

