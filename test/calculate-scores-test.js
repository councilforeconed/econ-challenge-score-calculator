var assert = require('chai').assert;

var calculate = require('../lib/calculate-scores');

var scores = [{ score: "1" }, { score: "2" }, { score: "3" }, { score: "4" }];

describe('score calculator', function(){
  
  it('should calculate a score of 9', function(){
    assert.equal(calculate(scores), 9);
  });
  
});