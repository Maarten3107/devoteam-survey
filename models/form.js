// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var formSchema = new Schema({
  form_id: Number,
  form_description: String,
  form_name: String,
  form_fields: Object
});

// the schema is useless so far
// we need to create a model using it
var Form = mongoose.model('Form', formSchema);

// make this available to our users in our Node applications
module.exports = Form;