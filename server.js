var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var port = 3030;

var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');
var app = express();

var corsOptions = {
    origin: 'http://localhost:3030'
}

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret}));
app.use(express.static('public'));


app.post('/api/login', userCtrl.login);

app.listen(port, function() {
    console.log('Server is now live on port ' + port);
})