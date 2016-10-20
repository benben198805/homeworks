function Cat(name, color) {
    Animal.call(this, name);
    this.color = color;
}

inherit(Cat, Animal);

Cat.prototype.bar = function() {
    console.log('maomao~~');
}
