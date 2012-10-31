var should = require('chai').should()
	, SampleController = require('../controllers/sample.controller.js')
	, sampleMockDB = require('./sample.mockdb.js');

var sampleController = null;

describe('sample.controller.js', function() {

	setup(function (done) {
		sampleController = new SampleController(sampleMockDB, null, null, null);
		should.exist(sampleController);
		done();
	});

	teardown(function (done) {
		sampleController = null;
		should.not.exist(sampleController);
		done();
	});

	describe('#list()', function () {
		it('should return array of all samples given no filters', function (done) {
			sampleController.list(function (err, samples){
				should.not.exist(err);
				should.exist(samples);
				samples.should.not.be.empty;
				samples.should.be.an.instanceOf(Array);
				done();
			});
		});
	});
});