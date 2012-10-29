// using db
var SampleDB = require('./dal/sample.db.js');

// class constructor
function SampleController(host, port, database, collectionName){

	this.db = new SampleDB(host, port, database, collectionName)
};

// public function
SampleController.prototype.list = function (callback){
	this.db.list(function (err, samples) {
		if (callback) {
			callback(err, samples);
		}
	});
};

module.exports = SampleController;