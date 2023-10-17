//Imports inquirer
const inquirer = require("inquirer");
//Imports inquirer maxlength extension for logo text and hex values
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
//Imports filesystem
const fs = require("fs");
//Imports shape classes created in /lib/shapes.js
const {Circle, Triangle, Square} = require("./lib/shapes.js");
//Allows maxlength extension to be used
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
//Questions to be handled by inquirer
const questions = [
    {
        name: "text",
        //The maxlength prompt type we imported
        type: "maxlength-input",
        message: "Please enter 3 characters to display for your logo.",
        //Sets the max number of characters
        maxLength: 3

    },
    {
        name: "textColor",
        type: "maxlength-input",
        message: "Enter the color you would like your text to be. Please enter a hexadecimal value.",
        maxLength: 7
    },
    {
        name: "shape",
        type: "list",
        message: "Which shape would you like you logo to be?",
        choices: ["Square", "Triangle", "Circle"]
    },
    {
        name: "shapeColor",
        type: "maxlength-input",
        message: "Enter the color would you like your background to be? Please enter a hexadecimal value.",
        maxLength: 7
    }
];
//Inquirer handled the questions and returns an object I named response
inquirer.prompt(questions).then(response => {
    //Intialize variables for insertion into the file body
    let shape;
    let y = 125;
    let font = 80;
    //Switch statement that sets shape to the chosen shape
    switch(response.shape){
        case "Square" :
            shape = new Square;
            shape.setColor(response.shapeColor);
            break;
        case "Triangle":
            shape = new Triangle;
            shape.setColor(response.shapeColor);
            y=150;
            font=60;
            break;

        case "Circle":
            shape = new Circle;
            shape.setColor(response.shapeColor);
            break;
            
    }
    //Writes the file to logo.svg in the logoGenerator folder
    fs.writeFile("logo.svg", 
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    ${shape.render()}

    <text x="150" y="${y}" font-size="${font}" text-anchor="middle" fill="${response.textColor}">${response.text}</text>

    </svg>
    `, 
    //Callback function that logs Created logo.svg if file is created
    (err) => {
        if(err){
            console.log("There was an error :(");
        } else {
            console.log("Created logo.svg");
        }
    })
})
