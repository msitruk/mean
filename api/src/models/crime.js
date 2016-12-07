var mongoose = require('mongoose');
//mongoose.connect('mongodb://mongo:27017/mean');
var mongoosePaginate = require('mongoose-paginate');

// Création du schéma pour les commentaires
var crimeSchema = new mongoose.Schema({
	compnos : String,
	naturecode : String,
	incident_type_description : String,
	main_crimecode : String,
	reptdistrict : String,
	reportingarea : Number,
	fromdate : String,
	weapontype : String,
	shooting : Boolean,
	domestic : Boolean,
	shift : String,
	year : Number,
	month : Number,
	day_week : String,
	ucrpart : String,
	x : Number,
	y : Number,
	streetname : String,
	xstreetname : String,
	location : String,
	versionKey: false
});
crimeSchema.plugin(mongoosePaginate);
// Création du Model pour les commentaires
var crimeModel = mongoose.model('crimeIncidents', crimeSchema);
module.exports = crimeModel;