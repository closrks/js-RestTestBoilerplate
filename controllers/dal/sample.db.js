var mongoose = require('mongoose');
var Connection = mongoose.Connection;
var Schema = mongoose.Schema;

// constructor
function SampleDB(host, port, database, collectionName) {

	this.connection = host instanceof Connection
		? host
		: mongoose.createConnection(host, database, port);

	var sampleSchema = new Schema({
		    _id: Schema.ObjectId
		  , name: String
	}, { collection: collectionName });

	this.Sample = this.connection.model('SampleModel', sampleSchema);

};

// public function
SampleDB.prototype.list = function (callback){
	this.Sample.find({}, function (err, items){
		if (err) callback(err);
		else callback(null, items);
	});
};

module.exports = SampleDB;