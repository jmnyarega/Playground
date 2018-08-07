const Animal = {
    setAge: function(age) {
        this.age = age;
    },
    getAge: function() {
        return this.age;
    },
    setName: function setName(name) {
        this.name = name;
    },
    getName: function getName() {
        return this.name;
    },
    setWeight: function(weight) {
        this.weight = weight;
    },
    getWeight: function() {
        return this.weight;
    },
    setDaysGrowing: function(daysGrowing) {
        this.daysGrowing = daysGrowing;
    },
    getDaysGrowing: function() {
        return this.getDaysGrowing;
    },
    setType: function(type) {
        this.type = type;
    },
    getType: function() {
        return this.type;
    }
}

module.exports = Animal; 
