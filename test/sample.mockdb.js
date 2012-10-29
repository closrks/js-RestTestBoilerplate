var mongoose = require('mongoose')
	, sampleMockDB = mongoose.createConnection("host", "database", 123);

// model
sampleMockDB.model = function (modelName, schema) {

	var sampleModelSchema = {
		find: function(condition, fields, options, callback) {
			if ('function' == typeof conditions) {
				callback = conditions;
				conditions = {};
				fields = null;
				options = null;
			} else if ('function' == typeof fields) {
				callback = fields;
				fields = null;
				options = null;
			} else if ('function' == typeof options) {
				callback = options;
				options = null;
			}

			var result = null;
			
			if (Object.keys(condition).length === 0) {
				result = [{
					  _id: 1
					, name: 'test'
				}];
			}

			if(callback) {
				callback(null, result);
			}
		}
	};

	switch (modelName.toLowerCase()) {
		case 'samplemodel':
			return sampleModelSchema;
		default: return null;
	};
};

module.exports = sampleMockDB;