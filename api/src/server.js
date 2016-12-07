const express = require('express');
const app = express();
const user = require('./routes/user');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/mean');

var userRoutes = require('./routes/user');
var crimeRoutes = require('./routes/crime');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    next();
});


//routes des utilisateurs
app.get('/find-user', userRoutes.findAllUser);
app.post('/post-user', jsonParser, userRoutes.insertUser);
app.get('/user/:id', userRoutes.findUserbyId);
app.post('/login', jsonParser, userRoutes.findlogin);
app.delete('/delete-user/:id', userRoutes.deleteUser);
app.put('/update-user/:id', userRoutes.updateUser);


//routes des crimes
app.post('/post-crime', crimeRoutes.insertCrime);
app.get('/', crimeRoutes.findAllCrime);
app.delete('/delete-crime/:id', crimeRoutes.deleteCrime);
app.put('/update-crime/:id', crimeRoutes.updateCrime );
app.get('/crime/:id', crimeRoutes.findbyId);

// test affichage crimes avec pagination
app.get('/crimes/:page/:items', crimeRoutes.findAllCrimePaginate);


//***************fin CRUD GRADE*********************//
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});