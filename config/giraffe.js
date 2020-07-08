const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;

const giraffeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        default: 10,
        min: 0
    },
    habitat: {
        type: String
    }
});

const Giraffe = model('giraffe', giraffeSchema);

module.exports = Giraffe;