var Mongoose = require("mongoose");
var Schema = Mongoose.Schema;

var MessageSchema = new Mongoose.Schema({
	"email": String,
	"content": String,
	"created": Date,
})

exports.Message = Mongoose.model('Message', MessageSchema);

