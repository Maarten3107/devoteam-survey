var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Form = require('../models/form');



/* GET all forms. */
router.get('/', function(req, res, next) {
  Form.find({}, function(err, forms) {
	  if (err) throw err;
		  res.json(forms);
	});
});

/* GET form by ID . */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;

	Form.findById(id, function(err, form) {
	  if (err){ res.status(404).send('Not found');}
	  res.json(form);
	});
});


/* POST create new form. */
router.post('/', function(req,res){	
	var newForm = Form(req.body);
	
	// save the form
	newForm.save(function(err) {
	  if (err) throw err;
	  	
	  res.json({'message':'form created'});
	});

});


module.exports = router;
