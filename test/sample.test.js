var should = require('chai').should()
	, SampleController = require('../controllers/sample.controller.js')
	, util = require('util')
	, sampleMockDB = require('./sample.mockdb.js');

var sampleController = null;

suite('sample.controller.js', function (){

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

	suite('list()', function() {

		suite(util.format(
			'Given no parameters'), function () {
			test('should return array of all samples', function (done){
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
});
