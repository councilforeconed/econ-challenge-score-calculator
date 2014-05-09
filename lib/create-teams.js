var _ = require('lodash');

var separateIntoTeams = require('./separate-into-teams');
var separateIntoRounds = require('./separate-into-rounds');

module.exports = function (teams) {
  
  _.each(teams, function (submissions, team) {
    teams[team] = {
      submissions: separateIntoRounds(submissions)
    };
    
    ['round1', 'round2', 'round3'].forEach(function (round) {
      var roundSubmissions = teams[team].submissions[round];
      
      var roundScore = roundSubmissions.map(function (submission) {
        return parseInt(submission.score, 10);
      }).sort(function (a, b) {
        return b - a;
      }).slice(0, 3).reduce(function (a, b) {
        return a + b;
      }, 0);
      
      teams[team][round + 'Score'] = roundScore;
    });
  });
  
  return teams;
  
};