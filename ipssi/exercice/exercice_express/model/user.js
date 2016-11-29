const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    id : Schema.ObjectId,
    name: String,
    first_name: String,
    email: String,
    date : { type : Date, default : Date.now }
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;