var assert = require('chai').assert;

var separate = require('../lib/separate-into-teams');
var data = require('./fake-data');

var result = separate(data);

describe('seperateIntoTeams', function(){
  
  it('should be an object', function(){
    assert.typeOf(result, 'object');
  });
  
  it('should contain arrays', function(){
    Object.keys(result).forEach(function (team) {
      assert.typeOf(result[team], 'array');
    })
  });
  
});