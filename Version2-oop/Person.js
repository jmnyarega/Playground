const Animal = require('./Animal');

let person = Object.create(Animal);
person.makesSound = function() {
    return "Miau";
};
person.profesion = "Teacher";

person.setWeight(34);
person.setType("Man");
console.log(person.getWeight()); // 34
console.log(person.getType()); // Man

