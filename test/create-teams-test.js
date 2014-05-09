var assert = require('chai').assert;

var createTeams = require('../lib/create-teams');
var separateIntoTeams = require('../lib/separate-into-teams');
var data = require('../lib/fake-data');

var teams = createTeams(separateIntoTeams(data));

describe('teams', function(){
  
  it('should be an object', function(){
    assert.typeOf(teams, 'object');
  });
  
  describe('team', function () {
    
    Object.keys(teams).forEach(function (key) {
      var team = teams[key];
      
      it('should have a key named submissions', function(){
        assert.ok(team.submissions);
      });
      
    })
    
  });
  
});