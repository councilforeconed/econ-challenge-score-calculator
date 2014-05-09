var assert = require('chai').assert;

var separate = require('../lib/separate-into-rounds');
var data = require('./fake-data');

var result = separate(data);

describe('separateIntoRounds', function(){
  
  it('should be an object', function(){
    assert.typeOf(result, 'object');
  });
  
  it('should have a key named round1', function(){
    assert.ok(result.round1);
  });
  
  it('should have a key named round2', function(){
    assert.ok(result.round2);
  });
  
  it('should have a key named round3', function(){
    assert.ok(result.round3);
  });
  
  it('.round1 should be an array', function(){
    assert.typeOf(result.round1, 'array')
  });
  
  it('.round2 should be an array', function(){
    assert.typeOf(result.round2, 'array')
  });
  
  it('.round3 should be an array', function(){
    assert.typeOf(result.round3, 'array')
  });
  
});