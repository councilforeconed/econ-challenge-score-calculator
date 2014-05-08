var assert = require('chai').assert;

var skeleton = require('../lib/skeleton');

describe('Skeleton', function () {

  it('should be an object', function(){
    assert.typeOf(skeleton, 'object');
  });
  
  it('should have two keys', function () {
    assert.equal(Object.keys(skeleton).length, 2);
  });
  
  it('should have a key named adamSmith', function(){
    assert.ok(skeleton.adamSmith);
  });
  
  it('should have a key named davidRicardo', function(){
    assert.ok(skeleton.davidRicardo);
  });
  
  describe('.adamSmith', function () {
    
    var division = skeleton.adamSmith;
    
    it('should be an array', function(){
      assert.typeOf(division, 'object');
    });
    
    it('should have a key named round1', function () {
      assert.ok(division.round1);
    });
    
    it('should have a key named round1', function () {
      assert.ok(division.round2);
    });
    
    it('should have a key named round1', function () {
      assert.ok(division.round3);
    });
    
    it('adamSmith.round1 should be an array', function () {
      assert.typeOf(division.round1, 'array');
    });
    
    it('adamSmith.round2 should be an array', function () {
      assert.typeOf(division.round2, 'array');
    });
    
    it('adamSmith.round3 should be an array', function () {
      assert.typeOf(division.round3, 'array');
    });
 
  });
  
});