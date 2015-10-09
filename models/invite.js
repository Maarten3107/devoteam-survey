// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var inviteSchema = new Schema({
  form_id : String,
  email: { type : String, unique : true, required : true, dropDups: true },
  status  : String,
});


//invites are always on pending
inviteSchema.pre("save",function(next) {
    this.status ="pending";
  next();
});

// the schema is useless so far
// we need to create a model using it
var Invite = mongoose.model('Invite', inviteSchema);
// make this available to our users in our Node applications
module.exports = Invite;