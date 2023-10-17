//shapes class that defines setColor function
class Shapes {

    setColor(color){
        this.color = color
    }


    
}
//All other classes inherit setColor from shapes and have their own uniqe render functions
class Triangle extends Shapes{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shapes{
    render(){
        return `<rect x="50" width="200" height="200" fill="${this.color}" />`
    }

}

class Circle extends Shapes{
    render(){
        return `<circle cx ="150" cy="100" r="100" fill="${this.color}" />`
    }
}
//exports child classes for use
module.exports = {
    Circle, Triangle, Square
}