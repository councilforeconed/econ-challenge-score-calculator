var _ = require('lodash');

var separateIntoTeams = require('./separate-into-teams');
var separateIntoRounds = require('./separate-into-rounds');
var calculateScore = require('./calculate-scores');

module.exports = function (teams) {
  
  _.each(teams, function (submissions, team) {
    teams[team] = {
      submissions: separateIntoRounds(submissions)
    };
    
    ['round1', 'round2', 'round3'].forEach(function (round) {
      var roundSubmissions = teams[team].submissions[round];
      
      var roundScore = calculateScore(roundSubmissions);
      
      teams[team][round + 'Score'] = roundScore;
    });
  });
  
  return teams;
  
};