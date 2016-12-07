var Crime = require("../models/crime");
var mongoosePaginate = require('mongoose-paginate');

// On crée une instance du Model
var monCrime = new Crime({
	"compnos" : 14535363614,
	"naturecode" : "Segolene",
	"incident_type_description" : "Ballist",
	"main_crimecode" : "Ballist",
	"reptdistrict" : "C11",
	"reportingarea" : 0,
	"fromdate" : "2015-05-12T00:10:00",
	"weapontype" : "Other",
	"shooting" : "False",
	"domestic" : "False",
	"shift" : "Last",
	"year" : 2015,
	"month" : 5,
	"day_week" : "Tuesday",
	"ucrpart" : "Part Two",
	"x" : 771681.0593,
	"y" : 2935070.74,
	"streetname" : "ROSSETER ST",
	"xstreetname" : "BULLARD ST",
	"location" : "(42.30119026, -71.07299707)"
});


//ajouter un crime
exports.insertCrime = function(req, res) {
	// On le sauvegarde dans MongoDB !
	monCrime.save(function (err, results) {
		if(err) throw err;
		res.json(results);
		console.log('Commentaire ajouté avec succès !');
	});
};

//afficher les crimes
exports.findAllCrime = function(req, res) {
	Crime.find({}, function (err, results) {
		if(err) throw err;
		res.json(results);
		console.log('Affichage de la liste des données.');
	});
};

//test affichage des crimes avec pagination
exports.findAllCrimePaginate = function(req, res) {
	// Crime.find({}, function (err, results) {
	// 	if(err) throw err;
	// 	res.json(results);
	// 	console.log('Affichage de la liste des données.');
	// });

	Crime.paginate({}, { page: req.params.page, limit: parseInt(req.params.items) }, function(err, result) {
	  // result.docs
	  // result.total
	  // result.limit - 10
	  // result.page - 3
	  // result.pages
  		if(err) throw err;
		res.json(result);
		console.log('Affichage de la liste des données.');
	});
};

//delete par crime Id
exports.deleteCrime = function(req,res){
	Crime.find({"_id": req.params.id} ,function(err,results){
		if(err) throw err;
		Crime.remove({"_id": req.params.id} ,function(err){
			if(err) throw err;
				console.log("Crime supprimé");
		});
		
	});
};

//update par crime Id
exports.updateCrime = function(req,res){
	Crime.findOneAndUpdate({"_id": req.params.id},  {"naturecode": "segolenEtna" } ,function(err,results){
		if(err) throw err;
		console.log('Document modifié');
	});
};

//afficher un crime par ID
exports.findbyId = function(req,res){
	Crime.find({"_id": req.params.id} ,function(err,results){
		if(err) throw err;
		res.json(results);
		console.log("CrimeById trouvé");
	});
};