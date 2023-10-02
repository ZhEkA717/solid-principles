// interface segregation
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Fish extends Animal {
    swim() {
        console.log(`${this.name} can swim`);
    }
}
class Eagle extends Animal {
    fly() {
        console.log(`${this.name} can fly`);
    }
    walk() {
        console.log(`${this.name} can walk`);
    }
}
class Dog extends Animal {
    swim() {
        console.log(`${this.name} can swim`);
    }
    walk() {
        console.log(`${this.name} can walk`);
    }
}
new Dog('Dog').walk();
new Eagle('Eagle').fly();
new Fish('Fish').swim();
