var _ = require('lodash');

module.exports = function (data) {
  
  return _.groupBy(data, function (datum) {
    return datum.team;
  });
  
};