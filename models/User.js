var mongoose = require('mongoose');

//var UserSchema = new mongoose.Schema({
//  name: String,
//  address: String,
//  position: String,
//  salary: Number,
//  updated_at: { type: Date, default: Date.now },
//});

var UserSchema = new mongoose.Schema({
  name: String,
  userid: String,
  password: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);

