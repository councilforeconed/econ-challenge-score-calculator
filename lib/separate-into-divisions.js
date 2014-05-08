var _ = require('lodash');

module.exports = function (data) {
  
  return _.groupBy(data, function (datum) {
    return {'0': 'adamSmith', '1': 'davidRicardo'}[datum.division];
  });
  
};