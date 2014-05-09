var _ = require('lodash');

var separateIntoDivisions = require('./lib/separate-into-divisions');
var separateIntoTeams = require('./lib/separate-into-teams');
var separateIntoRounds = require('./lib/separate-into-rounds');
var createTeams = require('./lib/create-teams');

module.exports = function (data) {
  
  var divisions = separateIntoDivisions(data);
  
  _.each(divisions, function (submissions, key) {
    divisions[key] = createTeams(separateIntoTeams(submissions));
  });
  
  return divisions;
  
};