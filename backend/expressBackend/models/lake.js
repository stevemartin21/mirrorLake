var mongoose = require('mongoose');
var lakeSchema = mongoose.Schema({
    name: {type: String},
    size: {type: String},
    image: {type: String},
    description: {type: String}

})

module.exports = mongoose.model('Lake', lakeSchema);