#! /usr/bin/env node

console.log("\n\t welcome to my project of words countig"); 
console.log("=".repeat(50));
import inquirer from "inquirer"
let answer = await inquirer.prompt([
{
    name: "sentence",
    type: "input",
    message: "Please Enter sentence or paragaraph to be count: "
}
]);
   
    let words = answer.sentence.trim().split(" ");

    console.log("=".repeat(50));
    console.log("no.of words in sentence");
    console.log(words);
    console.log(`\n -words count ${words.length}`);

