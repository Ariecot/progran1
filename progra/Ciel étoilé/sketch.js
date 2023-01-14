let isVertical = true;
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(13,5,45);
  stroke(255);
  star(100,150,75,30)

  let counter = 0;
  while(counter < 200){
    star(noise(1,counter)*width, noise(2,counter)*height,75,75);
    counter ++;
  }

}
  function star(x,y,w,h){
    push();
    translate(x,y)
    if(frameCount%5==0){
      line(-w/40,0,w/40,0);
    }
    else{
      line(0,-h/40,0,h/40);
    }
pop();
  }
