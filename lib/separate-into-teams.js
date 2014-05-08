var _ = require('lodash');

module.exports = function (data) {
  
  return _.chain(data).groupBy(function (datum) {
    return datum.team;
  }).values().value();
  
};