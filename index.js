function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
}

function draw() {
  fill(255);
  quad(windowWidth/2, 0, windowWidth, windowHeight/2, windowWidth/2, windowHeight, 0, windowHeight/2);
 fill(0);
 ellipse(windowWidth/2,windowHeight/2,windowWidth/4,windowWidth/4);
 noStroke();
 fill(0);
}

function mousePressed(){
  save('image.jpg');
}
