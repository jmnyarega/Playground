const Animal = require('./Animal');

function Cat() {};

Cat.prototype.makesSound = function() {
    return "Meous";
}

const cat = new Cat();
const animal = new Animal("Cat", 20, 5, 1, "cat family");

Object.setPrototypeOf(cat, animal);

console.log(cat.name); // Cat
console.log(cat.age); // 20
console.log(cat.weight); // 5
console.log(cat.daysGrowing); // 5
console.log(cat.type); // cat family
