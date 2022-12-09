let Degrade;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  Degrade=circularGradiant(width,height,255, 0, 31,25, 0, 31);
  
}

function draw() {
  // put drawing code here
  background(255, 166, 77);
  image(Degrade,0,0,width,height);
  
}

function linearGradiant(w,h,r1,v1,b1,r2,v2,b2){
  let graphic=Degrade=createGraphics(w, h);
  for(let compteur=0;compteur<h;compteur++) {
    let red=map(compteur,0,h,r1,r2);
    let green=map(compteur,0,h,v1,v2);
    let blue=map(compteur,0,h,b1,b2);
  
    graphic.stroke(red,green,blue);
    graphic.line(0,compteur,w,compteur);
    }
    return graphic;
}




function circularGradiant(w,h,r1,v1,b1,r2,v2,b2){
  let graphic=Degrade=createGraphics(w, h);
  h=h*3
  for(let compteur=0;compteur<h;compteur++) {
    let red=map(compteur,0,h,r1,r2);
    let green=map(compteur,0,h,v1,v2);
    let blue=map(compteur,0,h,b1,b2);
  
    graphic.fill(red,green,blue);
    graphic.noStroke();
    graphic.ellipse(w/2,h/2,h-compteur,h-compteur);
    }
    return graphic;
}