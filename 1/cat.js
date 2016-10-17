function Cat(name, color) {
    Animal.call(this, name, 'cat');
    this.color = color;
}

inherit(Cat, Animal);

Cat.prototype.miaow = function() {
    output('maomao~~');
}
