// Open Close principle
class Shape {
    area() {
        throw new Error('Area method should be implemented');
    }
}
class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
    }
    area() {
        return Math.pow(this.size, 2);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.pow(this.radius, 2);
    }
}
class AreaCalculator {
    constructor(shapes) {
        this.shapes = shapes;
    }
    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area();
            return acc;
        }, 0);
    }
}
console.log(new AreaCalculator([
    new Circle(5),
    new Square(5)
]).sum());
