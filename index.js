const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require("fs")
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
];

inquirer.prompt(questions).then(response => {
    fs.writeFile("logo.svg", 
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

${shape}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.shapeColor}">${response.text}</text>

</svg>
`)
})
