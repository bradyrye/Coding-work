var pointX = 200;
var pointY = 10;
var pointDirection = 1;
     var size = 22;
var count = 0;
var sizeDirection = 10;
var shapeX = 50;
var shapeY = 300;
var shapeXSpeed;
var shapeYSpeed;
var mouseShapeX = 40;
var mouseShapeY = 70;
function setup() {
    createCanvas(500, 500);
   }
   function draw() {
    background(120);
     strokeWeight(15);
     fill(13,145,14);
    
     circle(shapeX, shapeY, 10);
 
      // random speed
      shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 
     shapeX += shapeXSpeed;
     shapeY += shapeYSpeed;
     
     if(shapeX > width)
     {
         shapeX = 0;
     }
     if(shapeX < 0)
     {
         shapeX = width;
     }
     if(shapeY > height)
     {
         shapeY = 0;
     }
     if(shapeY < 0)
     {
         shapeY = height;
     }

    // wing 1
    fill(255, 204, 0);
    circle(135,200,200);
     // wing 2
    fill(255, 204, 0);
    circle(135,300,200);
     // wing 3
    fill(255, 204, 0);
    circle(345,200,200);
     // wing 4
    fill(255, 204, 0);
    circle(345,300,200);
    // eyes
    fill(0);
    point(228,15);
    point(260,15);
      point(pointX,pointY,205);
    pointX+=pointDirection;
    if(pointX >= 418 || pointX <= 82)
    {
        pointDirection *= -1;
    }
    //body color
    fill(160, 174, 200);
    // left leg
    rect(228,35,1,40);
    // right leg
    rect(260,35,1,40);
     
      // body
    ellipse(245, 235, 70, 345)
      // triangle
    fill(15);
    triangle(220,320,246,150,270,320)
     
    

      fill(20);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-2;
        count = 0;
    }
    text("Butterfly",20,50 );
    fill(168,30,95);
    circle(mouseShapeX, mouseShapeY, 25);
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}