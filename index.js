const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require("fs")
const {Circle, Triangle, Square} = require("./lib/shapes.js");
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
    let shape;
    let y;
    switch(response.shape){
        case "Square" :
            shape = new Square;
            shape.setColor(response.shapeColor);
            y=120;
            break;
        case "Triangle":
            shape = new Triangle;
            shape.setColor(response.shapeColor);
            break;

        case "Circle":
            shape = new Circle;
            shape.setColor(response.shapeColor);
            break;
    }
    fs.writeFile("logo.svg", 
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    ${shape.render()}

    <text x="150" y="${y}" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

    </svg>
    `, 
    (err) => {
        if(err){
            console.log("There was an error :(");
        } else {
            console.log("Created logo.svg");
        }
    })
})
