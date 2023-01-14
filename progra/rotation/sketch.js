function setup() {
  createCanvas(windowWidth,windowHeight)
  rectMode(CENTER);
}

function draw() {
  background(0);

  translate(width/2,height/2)
    push();
    rotate(millis()/1000);
    fill(255,255,0)
    rect(0,0,40,40)

    fill(128)
    rotate(millis()/800)
    rect(500,100,100,100)

    fill(45)
    rotate(millis()/700)
    rect(400,150,120,120)
    
    pop();

    push()
    rotate(millis()/600)
  translate(300,0);
    rotate(millis()/500)
    fill(0,128,255);
    rect(0,0,100,100);
   

  translate(200,0);
    rotate(millis()/400)
    fill(128);
    rect(0,0,50,50);
    pop()
    
}