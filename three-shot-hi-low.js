// 1- i pick a number1   random pick

// *prompt user for number (num2) to guess it

// the loop should be for 2 rounds 
// if num2 = num1  then  display you got it

// else if  num2 < num1 prompt sorry too low guess again

// else if num2 > num1 prompt sorry too high guess again

// outside of the loop final else 
// else   sorry i was thinking of  num1


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
           break
        }
        
    }

}
console.log("You guessed Right!");