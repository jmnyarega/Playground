function Animal(name, age, weight, daysGrowing, type) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.daysGrowing = daysGrowing;
    this.type = type;
}

Animal.prototype.setAge = function(age) {
    this.age = age;
}

Animal.prototype.getAge = function() {
    return this.age;
}

Animal.prototype.setName = function(name) {
    this.name = name;
}

Animal.prototype.getName = function() {
    return this.name;
}

Animal.prototype.setWeight = function(weight) {
    this.weight = weight;
}

Animal.prototype.getWeight = function() {
    return this.weight;
}

Animal.prototype.setDaysGrowing = function(daysGrowing) {
    this.daysGrowing = daysGrowing;
}

Animal.prototype.getDaysGrowing = function() {
    return this.daysGrowing;
}

Animal.prototype.setType = function(type) {
    this.type = type;
}

Animal.prototype.getType = function() {
    return this.type;
}

module.exports = Animal; 
