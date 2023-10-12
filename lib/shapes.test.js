
describe("Shapes", () => {
    describe("Triangle", () => {
        it("should produce a triangle of specific size with given color", () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

        })
    })
    describe("Square", () => {
        it("should produce a square of specific size with given color", () => {
            
        })
    })
    describe("Circle", () => {
        it("should produce a circle of specific size with given color", () => {
            
        })
    })
})