// http://nodejs.org/api/assert.html
// this things gives functions that are nice for testing:
  // assert.fail(actual, expected, message, operator)
  // assert(value, message), assert.ok(value, [message])
  // assert.equal(actual, expected, [message])
  // assert.notEqual(actual, expected, [message])
  // assert.deepEqual(actual, expected, [message])
  // assert.notDeepEqual(actual, expected, [message])
  // assert.strictEqual(actual, expected, [message])
  // assert.notStrictEqual(actual, expected, [message])
  // assert.throws(block, [error], [message])
  // assert.doesNotThrow(block, [message])
  // assert.ifError(value)

/*
var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
*/

var assert = require('assert');
var formatter = require('./index.js');

describe('testExtract', function() {
    var testFormats = [
    "(212) 555 1212",
    "(212) 555.1212",
    "(212) 555-1212",
    "(212) 5551212",
    "(212)5551212",
    "212 555 1212",
    "212.555.1212",
    "212-555-1212",
    "1-212-555-1212",
    "+1 (212) 555-1212",
    "12125551212",
    "+45 (212) 555-1212",
    "2125551212"];

    testFormats.forEach(function(number) {
      it("should test extract with this number: " + number, function() {
        // assert deep equal takes actual, expected
        assert.deepEqual(formatter.extract(number), 2125551212);
      })
    })
    it("should ignore alphabetical",function(){
      assert.deepEqual(formatter.extract("asdfdssssss"),"");
    })
  })

describe('testFormat',function() {
    var phoneNumber = "2125551212";
    describe('test message', function(){
      // go through each test format with actual, expected, message to print
      assert.deepEqual(formatter.format(phoneNumber, "(NNN) NNN NNNN"), "(212) 555 1212");
      assert.deepEqual(formatter.format(phoneNumber, "(NNN) NNN.NNNN"), "(212) 555.1212");
      assert.deepEqual(formatter.format(phoneNumber, "(NNN) NNN-NNNN"), "(212) 555-1212");
      assert.deepEqual(formatter.format(phoneNumber, "(NNN) NNNNNNN"), "(212) 5551212");
      assert.deepEqual(formatter.format(phoneNumber, "(NNN)NNNNNNN"), "(212)5551212");
      assert.deepEqual(formatter.format(phoneNumber, "NNN NNN NNNN"), "212 555 1212");
      assert.deepEqual(formatter.format(phoneNumber, "NNN.NNN.NNNN"), "212.555.1212");
      assert.deepEqual(formatter.format(phoneNumber, "NNN-NNN-NNNN"), "212-555-1212");
      assert.deepEqual(formatter.format(phoneNumber, "1-NNN-NNN-NNNN"), "1-212-555-1212");
      assert.deepEqual(formatter.format(phoneNumber, "+1 (NNN) NNN-NNNN"), "+1 (212) 555-1212");
      assert.deepEqual(formatter.format(phoneNumber, "1NNNNNNNNNN"), "12125551212");
    });
});



