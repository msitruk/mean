var User = require("../models/user");


var monUser = new User({
	"Lastname" : "John",
	"Firstname" : "Doe",
	"Id_grade" : "Agent",
	"isValidate" : false,
	"password" : "etnaroot",
	"email" : "john_d@etna-alternance.net"
});


//afficher les users
exports.findAllUser = function(req, res) {
    User.find({}, function (err, results) {
		if(err) throw err;
		res.json(results);
		console.log('Affichage de la liste des users.');
	});
};

//ajouter un user
exports.insertUser = function(req, res) {   
    nom = req.body.nom;
    prenom = req.body.prenom;
    grade = req.body.grade;
    mail = req.body.email;
    password = req.body.password;
    var monUser = new User({ "Lastname": nom, "Firstname": prenom, "Id_grade": grade, "IsValidate": false, "password" : password, "email": mail });
    console.log(monUser);
    monUser.save(function (err, results) {
        if(err) throw err;
        console.log(results.length);
        if(results.length > 0)
            res.json({"success" : true});
        else
            res.json({"success" : false});
    });
    return;
};

//afficher un user par mail
exports.findUserbyId =  function(req,res){
	User.find({"_id": req.params.id} ,function(err,results){
		if(err) throw err;
		res.json(results);
	});
};

exports.findlogin = function(req,res){
	console.log(req.body);
	mail = req.body.email;
	pass = req.body.password;

	console.log(mail);
	console.log(pass);

	User.find({"email": mail, "password": pass},function(err,results){
		if(err) throw err;
		console.log(results.length);
		if(results.length > 0)
			res.json({"success" : true});
		else
			res.json({"success" : false});
	});

	return;
};


//delete
exports.deleteUser = function(req,res){
	User.find({"_id": req.params.id} ,function(err,results){
		if(err) throw err;
		{
		 	User.remove({"_id": req.params.id} ,function(err){
				if(err) throw err;
				console.log("User supprimé");
			});
		}
	});
};

//update par crime Id
exports.updateUser =  function(req,res){
	User.findOneAndUpdate({"_id": req.params.id},  {"Firstname": "segolenEtna" } ,function(err,results){
		if(err) throw err;
		console.log("User à jour");
	});
};