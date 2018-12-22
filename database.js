const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/population');
const Schema = mongoose.Schema;
const peopleSchema = new Schema({
    first: { type: String  },
    last: { type: String}
})
module.exports = mongoose.model('people', peopleSchema)
