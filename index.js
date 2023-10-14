const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

const questions = [
    {
        name: "text",
        type: "maxlength-input",
        message: "Please enter 3 characters to display for your logo.",
        maxLength: 3

    },
    {
        name: "textColor",
        type: "input",
        message: "Enter the color you would like your text to be. Please enter a hexadecimal value."
    },
    {
        name: "shape",
        type: "list",
        message: "Which shape would you like you logo to be?",
        choices: ["Square", "Triangle", "Circle"]
    },
    {
        name: "shapeColor",
        type: "input",
        message: "Enter the color would you like your background to be? Please enter a hexadecimal value."
    }
]