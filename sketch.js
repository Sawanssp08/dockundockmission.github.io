var bg,bgimg;
var iss,issimg;
var spacecraft,spacecraftimg,spaceup,spacedown,spaceleft,spaceright;
var hasDocked = false; 
var abc;

function preload(){
 bgimg = loadImage("images/space.png");
 issimg = loadImage("images/iss.png");
 spacecraftimg = loadAnimation("images/spacecraft1.png");
 spaceup = loadAnimation("images/spacecraft2.png","images/spacecraft2.png");
 spaceleft = loadAnimation("images/spacecraft4.png","images/spacecraft4.png");
 spaceright = loadAnimation("images/spacecraft3.png","images/spacecraft3.png");
 spacedown = loadAnimation("images/spacecraft1.png");
}

function setup() {
  createCanvas(800,400);

  spacecraft=createSprite(700,300,50,50);
  spacecraft.addAnimation("space",spacecraftimg);
  spacecraft.scale=0.20;

  iss=createSprite(400, 200, 50, 50);
  iss.addImage("issimg",issimg);
  iss.scale=0.75;
  iss.depth+=1;

  abc=createSprite(350,210,10,10);
  abc.visible=false;
  abc.setCollider("rectangle",0,0,10,10);
  abc.debug=false;

}

function draw() {
  background(bgimg);  
  drawSprites();

  if(!hasDocked){  
    if(keyDown(UP_ARROW)){
      spacecraft.y -= 2;
      spacecraft.addAnimation("spaceup",spaceup);
      spacecraft.changeAnimation("spaceup");
    }
    
    if(keyDown(DOWN_ARROW)){
      spacecraft.y += 2;
      spacecraft.addAnimation("spacedwn",spacedown);
      spacecraft.changeAnimation("spacedwn");
    }

    if(keyDown(LEFT_ARROW)){
      spacecraft.x -= 2;
      spacecraft.addAnimation("spaceleft",spaceleft);
      spacecraft.changeAnimation("spaceleft");
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.x += 2;
      spacecraft.addAnimation("spaceright",spaceright);
      spacecraft.changeAnimation("spaceright");
    }
  }
  fill("white");
  textSize(30);
  text("-Sawan",50,380);

  fill("white");
  textSize(20);
  text("Use the arrow keys to move the Space craft.",20,40);

  fill("white");
  textSize(20);
  text("Dock the space craft to the ISS.",20,70);

  fill("white");
  textSize(20);
  text("ALL THE BEST!!",20,100);

  if(spacecraft.isTouching(abc)){
    hasDocked=true;
    fill("white");
    textSize(30);
    text("Docking Successfull!",225,380);
    console.log("DOCKING SUCCESSFULL");
  }
}