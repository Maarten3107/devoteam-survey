var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Invite = require('../models/invite');



router.get('/:id', function(req,res){
	var id = req.params.id


	Invite.find({ 'form_id': id }, function (err, invites) {
	  if (err) throw err;
		  res.json(invites);
	});
});


router.post('/', function(req,res){

	var newInvite = Invite(req.body);
	console.log(req.body);
	
	// save the form
	newInvite.save(function(err) {
	 
	});
});


module.exports = router;
