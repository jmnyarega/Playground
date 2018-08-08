const Animal = require('./Animal');

class Cat extends Animal  {
    constructor() {
        super();
    }

    makesSound() {
        return "Miau";
    }
}

const cat = new Cat();

cat.setWeight(34);
cat.setType("Cat animal family");
console.log(cat.getWeight()); // 34
console.log(cat.getType()); // Cat animal family
