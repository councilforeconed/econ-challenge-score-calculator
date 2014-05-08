var assert = require('chai').assert;

var separate = require('../lib/separate-into-teams');
var data = require('../lib/fake-data');

var result = separate(data);

describe('seperateIntoTeams', function(){
  
  it('should be an object', function(){
    assert.typeOf(result, 'array');
  });
  
  it('should contain arrays', function(){
    result.forEach(function (team) {
      assert.typeOf(team, 'array');
    })
  });
  
});