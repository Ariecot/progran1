function setup() {
  createCanvas(windowWidth,windowHeight);
}

function windowResized(){
resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(0);

  fill(255);
  rect(100,100,width-2*100,height-2*100);

  fill(255,0,0);
  textAlign(CENTER,CENTER);
  text("C'EST HONTEUX",width/2,height/2);
  textSize(50);
}