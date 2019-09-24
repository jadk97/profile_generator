const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let surveyData = {};
rl.question("What's your name? Nicknames are fine too. ", (answer) => {
    surveyData.name = answer;
  rl.question("Whats an activity you like doing? ", (answer) => {
    surveyData.activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      surveyData.listen = answer;
      rl.question("What meal is your favourite? (eg: dinner, brunch, etc) ", (answer) => {
        surveyData.meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          surveyData.food = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            surveyData.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              surveyData.superpower = answer;
              console.log(`${surveyData.name} loves listening to ${surveyData.music} while ${surveyData.activity}, devouring ${surveyData.food} for ${surveyData.meal}, prefers ${surveyData.sport} over any other sport, and is amazing at ${surveyData.superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


