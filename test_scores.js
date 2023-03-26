var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function(id) {
  return document.getElementById(id);
};
var n = 4;

var size = 10;

function addScore()

{

  var name = $('name').value;

  var score = $('score').value;

  if (name == "" || score == "" || isNaN(score)) alert("Invalid data ");

  else if (n < size)

  {

    names[n] = name;

    scores[n] = parseInt(score);

    n++;

  } else alert("Array already full");

}

function displayResults()

{

  var h, avg, name;

  h = scores[0];

  name = names[0];

  avg = 0;

  for (z = 0; z < n; z++)

  {

    if (h < scores[z])

    {

      h = scores[z];

      name = names[z]

    }

    avg = avg + scores[z];

  }

  avg = avg / n;

  var con = "<B>Results </b><br> Average Score= " + avg + "<br>High Score = " + name + " with a score of " + h;

  $('results').innerHTML = con;

}

function displayScores()

{

  var con = "<tr><td colspan='2'><h2>Scores</h2></td></tr><tr><td>Name</td><td>Score</td></tr> ";

  for (z = 0; z < n; z++)

  {

    con = con + "<tr><td>" + names[z] + "</td><td>" + scores[z] + "</td></tr>"

  }

  $('scores_table').innerHTML = con;

}

window.onload = function() {
  $("add").onclick = addScore;
  $("display_results").onclick = displayResults;
  $("display_scores").onclick = displayScores;
};
