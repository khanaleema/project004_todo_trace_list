#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "what do you want to add in your todo? "
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to add more todo? ",
            default: false
        }
    ]);
    const { TODO, addMore } = answers;
    console.log(answers);
    loop = addMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("Your TODO List:");
    todos.forEach(TODO => {
        console.log(TODO);
    });
}
else {
    console.log("NO todos found");
}
