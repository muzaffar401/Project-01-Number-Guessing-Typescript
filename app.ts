#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk"

async function main() {
    const answers = await inquirer.prompt([
        {
            name: "numberGuessed",
            type: "input",
            message: "Please Guess a Number",
            validate: function (input) {
                if (input.trim() === "") {
                    return chalk.bold.red("Enter a Valid Number!");
                }
                const numberGuessed = Number(input);
                if (isNaN(numberGuessed) || numberGuessed < 1 || numberGuessed > 10) {
                    return chalk.bold.red("Enter a Number Between 1 to 10!");
                }
                return true;
            }
        }
    ]);

    const randomNumber = Math.floor(Math.random() * 10 + 1);
    const guessedNumber = Number(answers.numberGuessed);

    if (randomNumber === guessedNumber) {
        console.log(chalk.bold.green("Congratulations! You guessed the right number."));
    } else {
        console.log(chalk.bold.red("You guessed a wrong number."));
    }
}

main();
