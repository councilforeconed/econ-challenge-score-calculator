var _ = require('lodash');

module.exports = function (data) {

  var results = _.groupBy(data, function (datum) {
    return {'0': 'adamSmith', '1': 'davidRicardo'}[datum.division];
  });
  
  _.each(results, function (value, key) {
    
    var rounds = _.groupBy(value, function (datum) {
      return datum.round;
    });
    
    _.each(rounds, function (value, key) {
      
      var teams = _.groupBy(value, function (datum) {
        return 'team' + datum.team;
      });
      
      _.each(teams, function (value, key) {
        
        var teamScores = value.map(function (submission) {
          return parseInt(submission.score, 10);
        }).sort(function (a, b) {
          return b - a;
        });
        
        var totalTeamScore = teamScores.slice(0,3).reduce(function (a, b) {
          return a + b;
        }, 0);
        
        var team = {
          teamScores: teamScores,
          totalTeamScore: totalTeamScore,
          submissions: value
        };
        
        teams[key] = team;
        
      });
      
      rounds[key] = teams;
    });
    
    results[key] = rounds;
    
  });
  
  return results;

};
