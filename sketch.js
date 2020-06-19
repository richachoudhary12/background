//create the variables
var ellipse;
var rect1;
var rect2;
var rect3

function setup(){

//set up the canvas
createCanvas(1200,400);

//create the objects
ellipse = createSprite(100,200,50,50);
ellipse.shapeColor = "white";

rect1 = createSprite(620,200,400,400);
rect2 = createSprite(200,200,450,400);
rect3 = createSprite(1000,200,400,400);

}

function draw(){

//clear the background
background("white");

//set the position of the ellipse a/c to the mouse
ellipse.x = mouseX;
ellipse.y = mouseY;

//write code for changing the background
if (isTouching(ellipse,rect1)){
ellipse.shapeColor = "red";
rect2.shapeColor = "red";
rect3.shapeColor = "red";
rect1.shapeColor = "red";
}

else {
ellipse.shapeColor = "white";
rect2.shapeColor = "white";
rect3.shapeColor = "white";
rect1.shapeColor = "red";
}

if (isTouching(ellipse,rect2)){
ellipse.shapeColor = "green";
rect2.shapeColor = "green";
rect3.shapeColor = "green";
rect1.shapeColor = "green";
}

else {
ellipse.shapeColor = "red";
rect2.shapeColor = "red";
rect3.shapeColor = "red";
rect1.shaperColor = "red";
}

if (isTouching(ellipse,rect3)){
ellipse.shapeColor = "blue";
rect3.shapeColor = "blue";
rect1.shapeColor = "blue";
rect2.shapeColor = "blue";
}

//display the objects
drawSprites();
}












  
 





