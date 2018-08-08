class Animal {
    constructor(name, age, weight, daysGrowing, type) { 
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.daysGrowing = daysGrowing;
        this.type = type;
     }

     setAge(age) {
         this.age = age;
     }

     getAge() {
         return this.age;
     }
    
    setDaysGrowing(daysGrowing) {
        this.daysGrowing = daysGrowing;
    }

    getDaysGrowing() {
        return this.daysGrowing;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    setType(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

module.exports = Animal; 