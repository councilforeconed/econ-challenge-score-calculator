var assert = require('chai').assert;

var calculate = require('../');
var data = require('../lib/fake-data');

var result = calculate(data);

describe('Calculator result', function () {

  it('should return an object', function(){
    assert.typeOf(result, 'object');
  });
  
  it('should have two keys', function () {
    assert.equal(Object.keys(result).length, 2);
  });
  
  it('should have a key named adamSmith', function(){
    assert.ok(result.adamSmith);
  });
  
  it('should have a key named davidRicardo', function(){
    assert.ok(result.davidRicardo);
  });
  
  describe('Adam Smith division', function () {
    
    var division = result.adamSmith;
    
    it('should be an object', function(){
      assert.typeOf(division, 'object');
    });
    
    it('should have three keys', function () {
      assert.equal(Object.keys(division).length, 3);
    });
    
    describe('rounds', function () {
      
      ['1','2','3'].forEach(function (round) {
        var r = result.adamSmith['1'];
        
        it('should be an object', function(){
          assert.typeOf(r, 'object');
        });
      })
      
    });
    
  });
  
});