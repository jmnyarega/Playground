const Animal = require('./Animal');

class Person extends Animal  {
    constructor() {
        super();
    }

    profesion() {
        return "Teacher";
    }
}

const person = new Person();

person.setWeight(34);
person.setType("Man");
console.log(person.getWeight()); // 34
console.log(person.getType()); // Man
