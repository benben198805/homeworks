function inherit(subType, superType) {
    subType.prototype = new superType();
    subType.prototype.caonstructor = subType;
    return subType;
}


function output(message){
    var node=document.createElement("LI");
	var textnode=document.createTextNode(message);
	node.appendChild(textnode);
	document.getElementsByClassName("result")[0].appendChild(node);
}
