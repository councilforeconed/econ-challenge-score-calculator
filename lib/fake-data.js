var _ = require('lodash');

var data = [];

["0", "1"].forEach(function (division) {

  ["1", "2", "3"].forEach(function (round) {

    ["Hoboken High", "High Tech High School", "Brooklyn Tech", "Coney Island Tech"].forEach(function (team) {

      ["1", "2", "3", "4"].forEach(function (student) {

        var points = (-75 + Math.floor(Math.random() * (150 + 75 + 1))).toString();
        var name = "Division " + division +
                   ", Team " + team +
                   ", Student " + student;

        var submission = {
          "userName": name,
          "division": division,
          "team": team,
          "round": round,
          "score": points
        };

        data.push(submission);

      });

    });

  });

});

module.exports = data;
