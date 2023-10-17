//Imports relevant shape classes from shapes.js
const {Circle, Triangle, Square} = require("./shapes.js");
//Intializes shape
let shape; 
//Creates the shapes test suite
describe("Shapes", () => {
    //Creates the triangle test suite
    describe("Triangle", () => {
        //sets shape to a new instance of the triangle class before each test is run
        beforeEach(() => {
            shape = new Triangle();
        })
        //Checks if the render function returns the specified value
        it("should produce a triangle of specific size with given color", () => {
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
        //checks if the set color function can handle hex values
        it("should be able to handle all characters for the color variable (ie. a hexadecimal value)", () => {
            shape.setColor("#726DA1");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#726DA1" />');
        })
    })
    //creates the square test suite
    describe("Square", () => {
        //sets shape to a new instance of the square class before each test is run
        beforeEach(() => {
            shape = new Square();
        })
        //Checks if the render function returns the specified value
        it("should produce a square of specific size with given color", () => {
            shape.setColor("red");
            expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="red" />`);
        })
        //checks if the set color function can handle hex values
        it("should be able to handle all characters for the color variable (ie. a hexadecimal value)", () => {
            shape.setColor("#801AC1");
            expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="#801AC1" />`);
        })
    })
    //creates the circle test suite
    describe("Circle", () => {
        //sets shape to a new instance of the circle class before each test is run
        beforeEach(() => {
            shape = new Circle();
        })
        //Checks if the render function returns the specified value
        it("should produce a circle of specific size with given color", () => {
            shape.setColor("red");
            expect(shape.render()).toEqual(`<circle cx ="150" cy="100" r="100" fill="red" />`);
        })
        //checks if the set color function can handle hex values
        it("should be able to handle all characters for the color variable (ie. a hexadecimal value)", () => {
            shape.setColor("#BE7621");
            expect(shape.render()).toEqual(`<circle cx ="150" cy="100" r="100" fill="#BE7621" />`)
        })
    })
})