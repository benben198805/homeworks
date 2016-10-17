function inherit(subType, superType) {
    subType.prototype = new superType();
    subType.prototype.caonstructor = subType;
    return subType;
}
