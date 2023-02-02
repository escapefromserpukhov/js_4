const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });


let myMin=1;
let myMax=10; 
let randomNumber = Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

let counter = 0;

const fs = require('fs');
function log(pathToFile) {
    if(pathToFile) {
        fs.writeFileSync(pathToFile, ""); 
    }

    return function add(line) {
        if(pathToFile) {
            fs.appendFile(pathToFile, line, 'utf8', (err) => {
                if(err) {
                    console.log("Error");
                } 
            });
        }
        console.log(line);
    };
}

function play(response) {
    rl.question('Enter a number between 1 and 10: ', (input) => {
        let userNumber = +input;

        if(isNaN(userNumber) || userNumber < myMin || userNumber > myMax) {
            response(`Wrong input. `);
            play(response);
        }

        counter++;
    
        if(userNumber === randomNumber) {
            response(`You guessed it! The number is: ${randomNumber}. Attempts used: ${+counter}\n`);
            rl.close();
            return;
        }
    
        if(userNumber > randomNumber) {
            response(`Too high! You entered: ${userNumber}. Attempt #${counter}\n`);
        } else {
            response(`Too low! You entered: ${userNumber}. Attempt #${counter}\n`);
        }
    
        rl.pause();
        play(response);
    });
}

let response = log("./log");
play(response);