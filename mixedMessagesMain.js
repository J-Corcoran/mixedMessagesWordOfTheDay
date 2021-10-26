const { Console } = require("console");

console.log("Welcome to the \"unusual\" word of the day generator.")
console.log("")
const unusualWordLog = ['afreet - "A powerful jinn or demon in Arabian and Muslim mythology"', 'boffola - "N. Amer. informal a joke that gets a loud or hearty laugh"', 'cantillate - "to chant or intone a passage of religious text"', "constellate - 'to gather together in a cluster or group'", "deedy - 'industrious or effective'", 'extramundane - "outside or beyond the physical world"'];

let unusualWord = unusualWordLog[Math.floor(Math.random() * unusualWordLog.length)];

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("We will get you a random word to match your name.\nEnter your name: ", function(name) {
        console.log(`\n\nThanks ${name}, your matching random word is:\n${unusualWord}`);
        rl.close();
    });

rl.on("close", function() {
    console.log("\nHave a great day! Or reload to try again!");
    process.exit(0);

});







