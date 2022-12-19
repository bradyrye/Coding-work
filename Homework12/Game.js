// x and y for my character
var characterX = 150;
var characterY = 150;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 40;
var shapeY = 60;
var shapeXSpeed;
var shapeYSpeed;
var shapeX2 = 60;
var shapeY2 = 20;

//mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup(){
    createCanvas(700, 700);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(20,175,32);
    stroke(0);
    fill(0);
    //top
    rect(0,0,width,10);
    //left
    rect(0,0,10,height);
    //bottom
    rect(0, height-10,width, 10);
    //right
    rect(width-10,0,10,height-50);
    //exit
    textSize(16);
    text("EXIT", width-50,height-50)

    //character
    fill(123,40,123);
    circle(characterX,characterY,45);

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
    function draw();
    {
    // potential enemy
    fill(133,145,144);
    circle(shapeX, shapeY, 100);

     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 9);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    //bounds
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
}
 // potential enemy 2
 fill(313,145,44);

 circle(shapeX2, shapeY2, 75);
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 9);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 2);

 // move the shape
 shapeX2 += shapeXSpeed;
 shapeY2 += shapeYSpeed;
 // bounds
 if(shapeX2 > width)
 {
     shapeX2 = 2;
 }
 if(shapeX2 < 2)
 {
     shapeX2 = width;
 }
 if(shapeY2 > height)
 {
     shapeY2 = 2;
 }
 if(shapeY2 < 2)
 {
     shapeY2 = height;
 }

    // exit-win
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(50);
        text("YOU DID IT!", width/2-150, height/2-150);
    }

    //click
    fill(320,30,40);
    circle(mouseShapeX, mouseShapeY, 160);

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
}
function draw()
{
    drawEnemy(X,Y);
    drawEnemy2(X2,Y2);
    drawcharactermovement();
    drawboarders();
    drawexit();
    drawtext();
    
}