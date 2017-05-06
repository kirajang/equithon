
// function to determine the ranking for each NGO based off of the severity of their
//    scandals, the number of their scandals, and the percentage of their revenue that
//    is used up by administrative costs
function rating(scandals, numScandal, admin){
  // declare the variables
  var score;
  var totalScandal;

  // each charity starts with a score of 100
  score = 100;

  // find the total impact of all their scandals
  totalScandal = scandals * numScandal;

  score = score - totalScandal - admin;
  console.log("Score: " + score);
}
