var mongoose = require('mongoose')

var db_url = 'mongodb://Mudassir_Malik:mlab147800@ds223605.mlab.com:23605/restaurant-users'
mongoose.connect(db_url, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });
