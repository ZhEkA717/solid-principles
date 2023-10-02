// interface segregation

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

interface ISwimmer {
    swim: () => void
}
interface IWalker {
    walk: () => void
}
interface IFlier {
    fly: () => void
}

class Fish extends Animal implements ISwimmer {
    swim() {
        console.log(`${this.name} can swim`);
    }
}

class Eagle extends Animal implements IFlier, IWalker {
    fly() {
        console.log(`${this.name} can fly`);
    }
    walk() {
        console.log(`${this.name} can walk`);
    }
}

class Dog extends Animal implements ISwimmer, IWalker {
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

