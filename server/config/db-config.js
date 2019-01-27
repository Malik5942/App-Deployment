var mongoose = require('mongoose')

var db_url = 'mongodb://Mudassir_Malik:mLab147800.mlab.com:13855/mongo-users'
mongoose.connect(db_url, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () { console.log('Successfully connected to DB') });