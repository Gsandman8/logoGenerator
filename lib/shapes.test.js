const {Circle, Triangle, Square} = require("./shapes.js");
let shape; 
describe("Shapes", () => {
    describe("Triangle", () => {
        beforeEach(() => {
            shape = new Triangle();
        })
        it("should produce a triangle of specific size with given color", () => {
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
        it("should be able to handle all characters for the color variable (ie. a hexadecimal value)", () => {
            shape.setColor("#726DA1");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#726DA1" />');
        })
    })
    describe("Square", () => {
        beforeEach(() => {
            shape = new Square();
        })
        it("should produce a square of specific size with given color", () => {
            shape.setColor("red");
            expect(shape.render()).toEqual(`<rect cx="150" width="200" heigth="100%" fill="red" />`);
        })
        it("should be able to handle all characters for the color variable (ie. a hexadecimal value)", () => {
            shape.setColor("#801AC1");
            expect(shape.render()).toEqual(`<rect cx="150" width="200" heigth="100%" fill="#801AC1" />`);
        })
    })
    describe("Circle", () => {
        beforeEach(() => {
            shape = new Circle();
        })
        it("should produce a circle of specific size with given color", () => {
            shape.setColor("red");
            expect(shape.render()).toEqual(`<circle cx ="150" cy="100" r="100" fill="red" />`);
        })
        it("should be able to handle all characters for the color variable (ie. a hexadecimal value)", () => {
            shape.setColor("#BE7621");
            expect(shape.render()).toEqual(`<circle cx ="150" cy="100" r="100" fill="#BE7621" />`)
        })
    })
})