const Animal = require('./Animal');

let cat = Object.create(Animal);
cat.makesSound = function() {
    return "Miau";
};

cat.setWeight(34);
cat.setType("Cat animal family");
console.log(cat.getWeight()); // 34
console.log(cat.getType()); // Cat animal family
