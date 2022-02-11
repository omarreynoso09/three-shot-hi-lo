
const prompt = require("prompt-sync")({ sigint: true })

const random = Math.floor(Math.random() * 100)
//console.log(random)

let guess = Number(prompt("I'm thinking of a number bewtween 1 and 100. Try to guess it! : "))
let count = 1

while(guess !== random) {

    while(count !== 3) {

        count++

        if(guess > random) {
            guess = Number(prompt("Sorry, too high! Guess Again!:  "));
        }
        if(guess < random) {
            guess = Number(prompt("Sorry, too low! Guess Again!:  "));
        }
        if(count === 3) {
            console.log("Sorry i was thinking of:  " + random);
           
        }
        
    }

}
console.log("You guessed Right!");
