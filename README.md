# Logo Generator

## Description 
A CLI application that utilizes the inquirer package to accept user input from the command line, and then output an svg file that describes a logo with the given parameters.

## Setup
This application can be setup by first cloning the github repository into an empty folder. Then the user must use the command "npm i" in the terminal to install all relevant node packages in the dependancies.

## Usage 
This application can be invoked by typing "node index.js" into the terminal while in the folder which contains the index.js file. Then the user simply has to respond to the prompts and they will find their newly created logo.svg file in the same folder as index.js.

## Tests
This application has 2 test for each shape class, for a total of 6. The first test, respectively, tests that the render function, when called on an instance of each shape class, returns the designated string that would define said shape in an svg file. The second test, respectively, is simply to test that entered a hexadecimal value will not break the setColor function. These tests can be run by entering "npm test" in the terminal.

## Video 
https://drive.google.com/file/d/19impJEQfoUbaSt8H_a7cJt8jSkweOZMK/view