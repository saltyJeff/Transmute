function $Transmute(obj) {
    obj.transmute = new transmute(obj.style);
    if(obj.style.transform.length > 1) {
        //TODO parse the transform string
    }
}

function transmute(obj) {
    this.style = obj;
    this.translateX = 0;
    this.translateY = 0;
    this.rotation = 0;
    this.rotationUnit = "deg";
}
transmute.prototype.apply = function () {
    var transformStr = "";
    transformStr += "translate("+this.translateX+"px,"+this.translateY+"px)";
    transformStr += " rotate("+this.rotation+this.rotationUnit+")";
    this.style.transform = transformStr;
};
transmute.prototype.translate = function (x,y) {
    this.translateX += x;
    this.translateY += y;
};
transmute.prototype.setTranslation = function (x,y) {
    this.translateX = x;
    this.translateY = y;
};
transmute.prototype.rotate = function (r) {
    this.rotation += r;
};
transmute.prototype.setRotation = function (r) {
    this.rotation = r;
};
transmute.prototype.getTranslationX = function () {
    return this.translateX;
};
transmute.prototype.getTranslationY = function () {
    return this.translateY;
};
transmute.prototype.getRotation = function () {
    return this.rotation;
};
transmute.prototype.getRotationUnit = function () {
    return this.rotationUnit;
};