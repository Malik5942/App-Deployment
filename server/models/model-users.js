var mongoose = require( 'mongoose' )

const userSchema = { name: String, email: String, balance: Number }

const Users = mongoose.model( 'Server-Users', userSchema );

module.exports = Users