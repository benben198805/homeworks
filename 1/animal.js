function Animal(name) {
    this.species = '动物';
    this.name = name;
}

Animal.prototype.run = function() {
    console.log('running');
}

Animal.prototype.eat = function() {
    console.log('eatting');
}

Animal.prototype.who = function() {
    console.log(this.name);
}
