const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {
  name: "What is your name?",
  activity: "What's an activity you like doing?",
  music: "What do you listen to while doing that?",
  meal: "Which meal is your favourite (eg: dinner, brunch, etc.)?",
  food: "What's your favourite thing to eat for that meal?",
  sport: "Which sport is your absolute favourite?",
  superpower: "What is your superpower?"
};

rl.question(profile.name + " ", (a) => {
  profile.name = a;
  rl.question(profile.activity + " ", (b) => {
    profile.activity = b;
    rl.question(profile.music + " ", (c) => {
      profile.music = c;
      rl.question(profile.meal + " ", (d) => {
        profile.meal = d;
        rl.question(profile.food + " ", (e) => {
          profile.food = e;
          rl.question(profile.sport + " ", (f) => {
            profile.sport = f;
            rl.question(profile.superpower + " ", (g) => {
              profile.superpower = g;
              rl.close();
            });
          });
        });
      });
    });
  });
});

rl.on("close", () => {
  let output = `Hi, my name is ${profile.name}. I like ${profile.activity} and listening to ${profile.music} while doing so. My favourite meal of the day is ${profile.meal} when I am able to eat ${profile.food}. My favourite sport is ${profile.sport}. If I had a superpower, it would be ${profile.superpower}`;
  console.log(output);
});