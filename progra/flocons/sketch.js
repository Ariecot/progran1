let snowSpeed =1;
let flocons =[];

function setup() {
  createCanvas(windowWidth,windowHeight);

  for(let cmpt = 0;cmpt<100;cmpt++){      // compteur initial ; continue si moins que cb ; hop +1
  flocons.push(new snow());              //fonction push qui va rajouter dchaque flocon dans mon étagère let flocons
  }
}

function draw() {
  background(176,240,238);
  for(let cmpt = 0;cmpt<100;cmpt++){
    flocons[cmpt].displaySnow()}                        //executer la fonction display flocon
}

class snow{
  constructor(){
    this.posX = random(width);
    this.posY = -15;
  }
  displaySnow(){  //pour dessiner un flocon dans constructor
    fill(255);
    noStroke();
    ellipse(this.posX,this.posY,10,10);
    this.posY=this.posY+snowSpeed;
  }
}