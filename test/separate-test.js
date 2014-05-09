var assert = require('chai').assert;

var separate = require('../lib/separate');
var data = require('../lib/fake-data');

var result = separate(data);

describe('separate', function(){
  
  it('should be an object', function(){
    assert.typeOf(result, 'object');
  });
  
  it('should have a key named adamSmith', function(){
    assert.ok(result.adamSmith);
  });
  
  it('should have a key named davidRicardo', function(){
    assert.ok(result.davidRicardo);
  });
  
});