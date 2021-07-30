var satellite, satelliteImg
var iss, issImg
var space
function setup() {
  createCanvas(900,800);
 satellite=createSprite(65, 150, 50, 50);
 satellite.scale=0.2
 iss=createSprite(600,200,50,50)
 iss.addImage("iss",issImg)
 
}

function preload(){
  still=loadAnimation("Docking-undocking/spacecraft1.png")
  thrusted=loadImage("Docking-undocking/spacecraft2.png")
  issImg=loadImage("Docking-undocking/iss.png")
  space=loadImage("Docking-undocking/spacebg.jpg")
}

function draw() {
  background(space);
  if(keyDown(UP_ARROW)){
    satellite.addAnimation("my god",thrusted)
    
    satellite.y=satellite.y-2.7
  }
  if(keyDown(RIGHT_ARROW)){
    satellite.addAnimation("my god",thrusted)
    
    satellite.x=satellite.x+2.7
  }
  if(keyDown(DOWN_ARROW)){
    satellite.addAnimation("my god",thrusted)
    
    satellite.y=satellite.y+2.7
  }
  if(keyDown(LEFT_ARROW)){
    satellite.addAnimation("my god",thrusted)
    
    satellite.x=satellite.x-2.7
  }

  if(satellite.x>490){
    textSize(20)
    text("Docking succesfull",100,100)
  }
  
  drawSprites();
}