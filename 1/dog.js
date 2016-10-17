function Dog(name, color) {
    Animal.call(this, name, 'dog');
    this.color = color;
}

inherit(Dog, Animal);

Dog.prototype.bark = function() {
    output('wuwu~~');
}
