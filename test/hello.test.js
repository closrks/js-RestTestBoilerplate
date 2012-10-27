var should = require('chai').should();

var Hello = require('../controllers/hello');

describe('Hello', function() {
	it('should have a default message of hello', function() {
		var hello = new Hello;
		hello.message.should.be.equal('hello');
	});
});