module.exports = function (scores) {
  
  if (!scores) return null;
  
  return scores.map(function (submission) {
    return parseInt(submission.score, 10);
  }).sort(function (a, b) {
    return b - a;
  }).slice(0, 3).reduce(function (a, b) {
    return a + b;
  }, 0);
  
};