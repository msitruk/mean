var mongoose = require('mongoose');
// if (mongoose.connection.readystate == 0)
// {
	//mongoose.connect('mongodb://mongo:27017/mean');
//}

var userSchema = new mongoose.Schema({
    Lastname : String,
    Firstname : String,
    Id_grade : Boolean,
    IsValidate : String,
    password : String,
    email : String,
    versionKey: false
});

var userModel = mongoose.model('user', userSchema);

module.exports = userModel;
