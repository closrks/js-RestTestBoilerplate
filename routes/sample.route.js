var SampleController = require('../controllers/sample.controller.js');

exports.CreateSampleRoutes = function (dbHost, dbPort) {

	var dbName = 'SampleDB';
	var dbCollectionName = "SampleCollection";
	var sampleController = new SampleController(dbHost, dbPort, dbName, dbCollectionName);	

	var sendResponse = function(req, res, content) {
		
		if (req.accepts('application/json')) {
			res.json(content);
		} else {
			res.contentType('js');

			var json = JSON.stringify(content, null, 3);

			if (req.query && req.query.callback) {
				json = req.query.callback + '(' + json + ');';
			}

			res.send(json);
		}
	}

	return {
		list: function(req, res, next) {
			sampleController.list(function (err, samples) {
				console.log('test');
				sendResponse(req, res, samples);
			});
		}

	};
};