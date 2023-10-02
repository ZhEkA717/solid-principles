// Liskov substitution principle

class Person {
    eating () {}
    sleeping() {}
    writeCode() {
        console.log('I can write code!');
    }
}

// class Developer extends Person {
//     constructor() {
//         super();
//     }

//     writeCode() {
//         console.log('I can write code!');
//     }
// }

class frontendDeveloper extends Person {
    constructor() {
        super();
    }
}

class backendDeveloper extends Person {
    constructor() {
        super();
    }
}

class designer extends Person {
    constructor() {
        super();
    }

    writeCode(): void {
        throw new Error('I can not write code!')
    }
}

function sayQualification(person: Person) {
    person.writeCode();
}

// function sayQualification(developer: Developer) {
//     developer.writeCode();
// }

sayQualification(new frontendDeveloper());
sayQualification(new backendDeveloper());