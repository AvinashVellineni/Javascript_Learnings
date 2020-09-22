/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

johnsScoresArray = [89, 120, 103];
mikeScoresArray = [116, 94, 123];
maryScoresArray = [97, 134, 105];

johnsAverage = calculateAverage(johnsScoresArray);
mikesAverage = calculateAverage(mikeScoresArray);
marysAverage = calculateAverage(maryScoresArray);

if (johnsAverage > mikesAverage && johnsAverage > marysAverage) {
  console.log(
    `john's average (${johnsAverage}) is greater than mikes average (${mikesAverage}) and marys average (${marysAverage})`
  );
} else if (mikesAverage > johnsAverage && mikesAverage > marysAverage) {
  console.log(
    `mike's average (${mikesAverage}) is greater than johns average (${johnsAverage}) and marys average (${marysAverage})`
  );
} else if (marysAverage > johnsAverage && marysAverage > mikesAverage) {
  console.log(
    `mary's average (${marysAverage}) is greater than johns average (${johnsAverage}) and mike's average (${mikesAverage})`
  );
} else {
  console.log(`We don't have a clear winner here`);
}

function calculateAverage(scoresArray) {
  var sum = 0;
  for (var i = 0; i < scoresArray.length; i++) {
    sum += scoresArray[i];
  }
  return sum / scoresArray.length;
}
