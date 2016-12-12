var rdraw = 255;
var gdraw = 255;
var bdraw = 255;
var dX = 0
var dY = 0

function setup() {
  createCanvas(800, 600);
  background(0);

  var dX = mouseX;
  var dY = mouseY;

radius = 0
}

function draw() {
  if((mouseIsPressed)) {
    if(keyIsDown(BACKSPACE)) {
      fill(rdraw, gdraw, bdraw, 225);
      ellipse(mouseX, mouseY, radius, radius);
  
      if((dX > 0) && (gdraw > 25.01)) gdraw -= random(0, 25);
      if((dX > 0) && (gdraw < 25.01)) bdraw -= random(0, 25);
  
      if((dX < 0) && (gdraw < 229.99)) gdraw += random(0, 25);
      if((dX < 0) && (gdraw > 229.99)) bdraw += random(0, 25);
  
      if((dY > 0) && (rdraw > 25.01)) rdraw -= random(0, 25);
      if((dY > 0) && (rdraw < 25.01)) bdraw -= random(0, 25);
  
      if((dY < 0) && (rdraw < 229.99)) rdraw += random(0, 25);
      if((dY < 0) && (rdraw > 229.99)) bdraw += random(0, 25);

      dX = mouseX - pmouseX;
      dY = mouseY - pmouseY;
      radius -= 0.5;
      
  }
  
  else {
    fill(rdraw, gdraw, bdraw, 225);
    ellipse(mouseX, mouseY, radius, radius);
  
    if((dX > 0) && (gdraw > 25.01)) gdraw -= random(0, 25)
    if((dX > 0) && (gdraw < 25.01)) bdraw -= random(0, 25);
  
    if((dX < 0) && (gdraw < 229.99)) gdraw += random(0, 25);
    if((dX < 0) && (gdraw > 229.99)) bdraw += random(0, 5);
  
    if((dY > 0) && (rdraw > 25.01)) rdraw -= random(0, 25);
    if((dY > 0) && (rdraw < 25.01)) bdraw -= random(0, 25);
  
    if((dY < 0) && (rdraw < 229.99)) rdraw += random(0, 25);
    if((dY < 0) && (rdraw > 229.99)) bdraw += random(0, 5);
  
    dX = mouseX - pmouseX;
    dY = mouseY - pmouseY;
    radius += 0.5;

  }
}
}

function mouseReleased() {
  radius = (radius * 0.5)
}

function keyPressed() {
  if (keyCode == ENTER) {
    background(0);
    radius = 0;
  } else if (keyCode == RIGHT_ARROW) {
    rdraw = 255;
    gdraw = 0;
    bdraw = 0;
  } else if (keyCode == LEFT_ARROW) {
    rdraw = 0;
    gdraw = 255;
    bdraw = 0;
  } else if (keyCode == DOWN_ARROW) {
    rdraw = 0;
    gdraw = 0;
    bdraw = 255;
  } else if (keyCode == UP_ARROW) {
    rdraw = 255;
    gdraw = 255;
    bdraw = 255;
  } else {
    rdraw = random(255);
    gdraw = random(255);
    bdraw = random(255);
  }
}
