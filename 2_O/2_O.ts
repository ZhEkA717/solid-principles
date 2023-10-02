// Open Close principle

class Shape {
    area(): number {
        throw new Error('Area method should be implemented');
    }
}

class Square extends Shape {
    size: number;

    constructor(size: number) {
        super();
        this.size = size;
    }

    area(): number {
        return this.size**2;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return this.radius ** 2;
    }
}


class AreaCalculator {
    shapes: Shape[];

    constructor(shapes: Shape[]) {
        this.shapes = shapes;
    }

    sum() {
        return this.shapes.reduce((acc, shape: Shape) => {
            acc += shape.area(); 
            return acc;
        }, 0)
    }
}

console.log(new AreaCalculator([
        new Circle(5),
        new Square(5)   
    ]).sum()
);