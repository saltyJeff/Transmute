# Transmute.js, a library for modifying CSS transforms from JS
Demo @ http://saltyJeff.github.io/Transmute
## Usage:
```
var div = document.getElementById("move");
$Transmute(div); //initialize the transmute object
```
## Basic Transforms
```
div.transmute.translate(x,y); //translates the div another x and y units (will be added to previous translations)
div.transmute.setTranslation (x,y); //sets the translation (overrides the current translations)
div.transmute.rotate (r); //rotates the the div another r degrees (added to previous rotation)
div.transmute.setRotation (r); //sets the rotation (overrides the current rotation)
div.transmute.apply(); //applies the current transforms
```
None of the translations will update until you call div.transmute.apply(), so don't forget to call it
## Variables
```
div.transmute.translateX; //x translation
```
Getter Function: div.transmute.getTranslationX ();
```
div.transmute.translateY; //y translation
```
Getter Function: div.transmute.getTranslationY ();
```
div.transmute.rotation; //rotation
```
Getter Function: div.transmute.getRotation();
```
div.transmute.rotationUnit; //units for rotation, defaults to "deg"
```
Getter Function: div.transmute.getRotationUnit ();
