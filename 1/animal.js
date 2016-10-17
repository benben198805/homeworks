function Animal(name, type) {
    this.species = '动物';
    this.name = name;
    this.type = type;
}

Animal.prototype.run = function() {
    output(this.type + ' ' + this.name + ' is running');
}

Animal.prototype.eat = function() {
    output(this.type + ' ' + this.name + ' is eatting');
}

Animal.prototype.who = function() {
    output('This animal\'s name is ' + this.name + '.');
}
