var _ = require('lodash');

var separateIntoDivisions = require('./separate-into-divisions');
var separateIntoTeams = require('./separate-into-teams');
var separateIntoRounds = require('./separate-into-rounds');
var createTeams = require('./create-teams');

module.exports = function (data) {
  
  var divisions = separateIntoDivisions(data);
  
  _.each(divisions, function (submissions, key) {
    divisions[key] = createTeams(separateIntoTeams(submissions));
  })
  
  return divisions;
  
};