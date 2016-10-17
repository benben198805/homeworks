function Dog(name, color) {
    Animal.call(this, name);
    this.color = color;
}

inherit(Dog, Animal);

Dog.prototype.bar = function() {
    console.log('wuwu~~');
}
