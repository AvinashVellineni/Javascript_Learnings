////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*(function() {
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };

  var question1 = new Question(
    'What is your name?',
    ['Avinash', 'Abishek', 'Rahul', 'Vinay'],
    2
  );

  var question2 = new Question(
    'Where do you live?',
    ['Chennai', 'Hyderabad', 'Banglore', 'Mumbai'],
    1
  );

  var question3 = new Question(
    'What do you like to eat??',
    ['Chicken', 'Mutton', 'Fish', 'Crab'],
    4
  );

  var questionsArray = [];
  questionsArray.push(question1);
  questionsArray.push(question2);
  questionsArray.push(question3);
  var randomNumber;

  function selectRandomQuestion(questionsArray) {
    randomNumber = Math.floor(Math.random() * questionsArray.length);
    console.log(`Question: ${questionsArray[randomNumber].question}`);
    for (let i = 0; i < questionsArray[randomNumber].answers.length; i++) {
      console.log(`${i + 1}) ${questionsArray[randomNumber].answers[i]}`);
    }
  }

  selectRandomQuestion(questionsArray);

  var userAnswerInput = prompt(
    'Please select/enter the choice of the correct answer..'
  );

  checkWhetherTheAnswerISCorrect();

  function checkWhetherTheAnswerISCorrect() {
    if (
      parseInt(userAnswerInput) === questionsArray[randomNumber].correctAnswer
    ) {
      console.log(`The entered answer is correct..Congratz..`);
    } else {
      console.log(`You have entered a wrong answer. Better luck next time.`);
    }
  }
})();

*/
/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  };

  var question1 = new Question(
    'What is your name?',
    ['Avinash', 'Abishek', 'Rahul', 'Vinay'],
    2
  );

  var question2 = new Question(
    'Where do you live?',
    ['Chennai', 'Hyderabad', 'Banglore', 'Mumbai'],
    1
  );

  var question3 = new Question(
    'What do you like to eat??',
    ['Chicken', 'Mutton', 'Fish', 'Crab'],
    4
  );

  var questionsArray = [];
  questionsArray.push(question1);
  questionsArray.push(question2);
  questionsArray.push(question3);
  var randomNumber, userAnswerInput;
  var score = 0;

  function checkWhetherTheAnswerISCorrect() {
    if (userAnswerInput === 'exit') {
      console.log(`Exiting the game`);
    } else {
      if (
        parseInt(userAnswerInput) === questionsArray[randomNumber].correctAnswer
      ) {
        console.log(`The entered answer is correct..Congratz..\n`);
        scoreCalculation();
      } else {
        console.log(
          `You have entered a wrong answer. Better luck next time.\n`
        );
      }
      console.log(`Your current Score is: ${score}`);
      continueFunc();
    }
  }

  function selectRandomQuestion(questionsArray) {
    randomNumber = Math.floor(Math.random() * questionsArray.length);
    console.log(`Question: ${questionsArray[randomNumber].question}`);
    for (let i = 0; i < questionsArray[randomNumber].answers.length; i++) {
      console.log(`${i + 1}) ${questionsArray[randomNumber].answers[i]}`);
    }
  }

  function continueFunc() {
    selectRandomQuestion(questionsArray);
    userAnswerInput = prompt(
      'Please select/enter the choice of the correct answer..'
    );
    checkWhetherTheAnswerISCorrect();
  }

  function scoreCalculation() {
    score++;
  }

  continueFunc();
})();
