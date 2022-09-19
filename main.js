/*
# Color Calculator

In this project we'll create a program that can combine and deconstruct colors according to the following tables

#### Color combining

| inputs | output |
| --- | --- |
| red + blue | purple |
| red + yellow | orange |
| blue + yellow | green |
| anything else | "error" |

#### Color deconstructing

| input | outputs |
| --- | --- |
| purple | red + blue |
| orange | red + yellow |
| green | blue + yellow |
| anything else | error |

We won't worry about any colors that are neither primary nor secondary colors.

## Your program

Fork and clone. Write your code in a file named `main.js`.

Your program should prompt the user for whether they want to combine colors or deconstruct a color (it's up to you what this user interface looks like exactly).

If the user chooses to combine, prompt them for two colors (one at a time). Combine the colors (using if, else if, and else statements) then log the result.

If the user chooses to deconstruct, prompt them for a single color. Deconstruct the color (using if, else if, and else statements) then log the result.

*/

const prompt = require('prompt-sync')({sigint: true});

let firstChoice = String(prompt(`Type either 'combine' or 'deconstruct' to begin the colour operation: `)).toLowerCase();

let combineColors1 = String()
let combineColors2 = String()
let deconstructColors = String()

if(firstChoice === 'combine') {
    combineColors1 = String(prompt(`Select one of the following colors to combine: red, blue or yellow: `)).toLowerCase();
    combineColors2 = String(prompt(`Select the last color to combine: red, blue or yellow: `)).toLowerCase();

} else if (firstChoice == `deconstruct`) {
    deconstructColors = String(prompt(`Deconstruct one the following colors: purple, orange, green: `)).toLowerCase();
}

// --------------------------

if (combineColors1 === `red` && combineColors2 == `blue`) {
    console.log (`red and blue creates Purple!`)
    } else if (combineColors1 === `blue` && combineColors2 == `red`) {
        console.log (`blue and red creates Purple!`)
    } else if (combineColors1 === `red` && combineColors2 == `yellow`) {
        console.log (`red and yellow creates Orange!`)
    } else if (combineColors1 === `yellow` && combineColors2 == `red`) {
        console.log (`yellow and red creates Orange!`)
    } else if (combineColors1 === `blue` && combineColors2 == `yellow`) {
        console.log (`blue and yellow creates Green!`)
    } else if (combineColors1 === `yellow` && combineColors2 == `blue`) {
        console.log (`yellow and blue creates Green!`)
    } else if (deconstructColors === `purple`) {
    console.log (`Purple is the product of combining the colours red and blue.`)
    } else if (deconstructColors === `orange`) {
        console.log (`Orange is the product of combining the colors red and yellow.`)
    } else if (deconstructColors === `green`) {
        console.log (`Green is the product of combining colors blue and yellow.`)
    } else {
        console.log (`Error! please use the given colors`)
            }



// RESIDUALS OF A FAILED FIRST ATTEMPT

// if (firstChoice === 'combine'){
//     console.log (combineColors1, combineColors2);
// } else if (firstChoice === `deconstruct`){
//     console.log (deconstructColors)
// }
// } else if (combineColors1 === `red` && combineColors2 == `blue`) {
//         console.log (`red and blue creates Purple!`)
//     } else if (combineColors1 === `blue` && combineColors2 == `red`) {
//         console.log (`blue and red creates Purple!`)
//     } else if (combineColors1 === `red` && combineColors2 == `yellow`) {
//         console.log (`red and yellow creates Orange!`)
//     } else if (combineColors1 === `yellow` && combineColors2 == `red`) {
//         console.log (`yellow and red creates Orange!`)
//     } else if (combineColors1 === `blue` && combineColors2 == `yellow`) {
//         console.log (`blue and yellow creates Green!`)
//     } else if (combineColors1 === `yellow` && combineColors2 == `blue`) {
//         console.log (`yellow and blue creates Green!`)
//     } else {
//         console.log (`Error! please use the given colors`)
//     }

//     } else if (deconstructColors === `purple`) {
//         console.log (`Purple is the product of combining the colours red and blue.`)
//     } else if (deconstructColors === `orange`) {
//         console.log (`Orange is the product of combining the colors red and yellow.`)
//     } else if (deconstructColors === `green`) {
//         console.log (`Green is the product of combining colors blue and yellow.`)
//     } else {
//         console.log (`Error! please use the given colors`)
//     }
// } else {
//     console.log(`Error! please use the given numerical values for the first choice!`)
// }
