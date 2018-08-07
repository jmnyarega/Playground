const Animal = require('./Animal');

function Person(profesion) {
    this.profesion = profesion;
};

Person.prototype.setProfession = function(profesion) {
    this.profesion = profesion;
}

Person.prototype.getProfession = function() {
   return this.profesion;
}

const person = new Person();
const animal = new Animal("Mark", 20, 55, 30, "Man");

Object.setPrototypeOf(person, animal);

console.log(person.name); // Mark
console.log(person.age); // 20
console.log(person.weight); // 55
console.log(person.daysGrowing); // 30
console.log(person.type); // Man
