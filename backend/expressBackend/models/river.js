var mongoose = require('mongoose');
var riverSchema = mongoose.Schema({
    name: {type: String},
    image: {type: String},
    description: {type: String}

})

module.exports = mongoose.model('River', riverSchema)