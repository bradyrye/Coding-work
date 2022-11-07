function setup()
{
    createCanvas(500, 600);
    movement = floor(random() * 10);
}
var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var x = 100;
var y = 200;
var diameter = 50;

var movement = 13;
var size = 30;
var sizeDirection = 30;
var count = 30

function draw()
{
    background(20,45,78);
    fill(300, 138, 9);
    circle(250,250,300);

    fill(200,40,76);
    rect(230,250,30,40);
    fill(100,0,0);
    circle(210,200,60);
    circle(310,200,60)
    fill(51);
    circle(210,200,30);;
    circle(310,200,30);
  fill(300);
   stroke(255);
  point(210, 300);
  point(310, 200);
  stroke(4000);
  line(250, 100, 140, 210);
  line(250, 100, 270, 210);
  line(250, 30, 250, 100);
  line(275,300,250,200);
  line(275,300,200,300);
  fill(300,40,5)
  triangle(150,350,350,350,250,390);
  //text
  textSize(size);
  size+= sizeDirection;
  count++;
  if(count > 5)
  {
    sizeDirection *=-1
    count = 0;
  }
  text('brady', 10, 25);


  circle(x, y, diameter);
  fill(redColor, greenColor, blueColor);
  circle(x, y, 25);
  // eye
  fill(redColor, greenColor, blueColor);
  circle(x, 200, 25)
  if(x >= 310)
    {
       movement*=-1;
    }
    if(x <= 0)
    {
        movement *= -1;
    }
     x+= movement;  
     y+= movement;
     fill(redColor, greenColor, blueColor);
     // triangle
     triangle(x, 400, 20, y, 40, 200);
     //body
     circle(200, y, 200,)
     y++
}