class Shapes {

    setColor(color){
        this.color = color
    }


    
}

class Triangle extends Shapes{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shapes{
    render(){
        return `<rect cx="150" width="200" heigth="100%" fill="${this.color}" />`
    }

}

class Circle extends Shapes{
    render(){
        return `<circle cx ="150" cy="100" r="100" fill="${this.color}" />`
    }
}

module.exports = {
    Circle, Triangle, Square
}