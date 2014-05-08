var assert = require('chai').assert;

var separate = require('../lib/separate-into-divisions');
var data = require('../lib/fake-data');

var result = separate(data);

describe('seperateIntoDivisions', function(){
  
  it('should be an object', function(){
    assert.typeOf(result, 'object');
  });
  
  it('should have a key named adamSmith', function(){
    assert.ok(result.adamSmith);
  });
  
  it('should have a key named davidRicardo', function(){
    assert.ok(result.davidRicardo);
  });
  
  it('.adamSmith should be an array', function(){
    assert.typeOf(result.adamSmith, 'array')
  });
  
  it('.adamSmith should be an array', function(){
    assert.typeOf(result.davidRicardo, 'array')
  });
  
});