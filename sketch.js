var man,manImage;
var coronavirus,angryvirus,cryingvirus,happyvirus;
var mask, maskImage;
var sanitizer,sanitizerImage;
var crowd,crowdImage;
var handshake,handshakeImage;
var backgroundImage;
var infectedperson,infectedpersonImage;
var mandialogue,infdialogue;
var PLAY = 1;
var gameState="one";
var gameOver, restart;
var score=0;
var newbackground;
var vaccine;

function preload(){
manImage=loadAnimation("images/man1.png","images/man2.png","images/man3.png","images/man4.png","images/man5.png");
happyvirus=loadImage("images/happyvirus.png");
cryingvirus=loadImage("images/cryingvirus.png");
angryvirus=loadImage("images/angryvirus.png");
maskImage=loadImage("images/mask.png");
sanitizerImage=loadImage("images/sanitizer.png");
crowdImage=loadImage("images/crowd.png");
handshakeImage=loadImage("images/handshake.png");
backgroundImage=loadImage("sprites/background.jpg");
newbackgroundImage=loadImage("images/newbackground.jpg");
infectedpersonImage=loadAnimation("images/inf1.png","images/inf2.png","images/inf3.png","images/inf4.png","images/inf5.png","images/inf6.png");
mandialogue=loadImage("images/hihello.png");
infdialogue=loadImage("images/imfine.jpg");
vaccine=loadImage("sprites/vac.png");
}

function setup(){
createCanvas(1500,800);
man=createSprite(100,600,100,100);
man.addAnimation("man",manImage);
man.scale=4;
man.velocityX=2;

coronavirus1=createSprite(200,200,50,50);
coronavirus1.addImage("coronavirus",happyvirus);
coronavirus1.scale=0.1;
coronavirus1.visible=false;

coronavirus2=createSprite(300,300,80,80);
coronavirus2.addImage("coronavirus",cryingvirus);
coronavirus2.scale=0.2;
coronavirus2.visible=false;


//coronavirus3.visible=false;

mask=createSprite(700,200,70,70);
mask.addImage("mask",maskImage);
mask.scale=0.2;
mask.visible=false;

sanitizer=createSprite(700,300,50,50);
sanitizer.addImage("sanitizer",sanitizerImage);
sanitizer.scale=0.2;
sanitizer.visible=false;

crowd=createSprite(700,550,50,50);
crowd.addImage("crowd",crowdImage);
crowd.scale=1.5;
crowd.visible=false;

handshake=createSprite(700,200,50,50);
handshake.addImage("handshake",handshakeImage);
handshake.scale=0.2;
handshake.visible=false;

infectedperson=createSprite(800,600,80,80);
infectedperson.addAnimation("infectedperson",infectedpersonImage);
infectedperson.scale=1;
infectedperson.velocityX=-2;
}

function draw(){
    background(backgroundImage);
     
    background.velocityX = -5;
    if(gameState==="one"){

    
    if(infectedperson.isTouching(man)){
      infectedperson.velocityX=0.1;
      man.velocityX=0.1;
      image(mandialogue,300,280,100,100);
    }

    if(man.isTouching(infectedperson)){
      man.velocityX=0.1;
      infectedperson.velocityX=0.1;
      image(infdialogue,500,250,100,100);
      coronavirus1.visible=true;
      coronavirus1.x=580;
      coronavirus1.y=410;
      console.log("frameCount"+frameCount);
      if(frameCount===90)
      gameState="two";
    }
  }
    if(gameState==="two"){
      coronavirus1.velocityX=-2;
      //add image bye
      if(frameCount===200)
      gameState="three";
    }
   
    if(gameState==="three"){
      man.velocityX=2;
      infectedperson.velocityX=-2;
      coronavirus1.x=man.x;
      if(man.x>1500)
      gameState="four";
    }
    if(gameState==="four"){
crowd.visible=true;
c1();
if(frameCount===1500){
gameState="five";
}
    }

    if(gameState==="five"){
      console.log("five  "+frameCount);
      background(newbackgroundImage);
      crowd.visible=false;
      if(frameCount===1610){
gameState="six";
      }
    }
    
    if(gameState==="six"){
      console.log("six  "+frameCount);
      background("white");
      textSize(30);
      text("Don't",650,100);
      handshake.visible=true;
      crowd.visible=true;
      crowd.scale=0.8;
      if(frameCount===1800){
        gameState="seven";
      }
    }
    if(gameState==="seven"){
      background("white");
      handshake.visible=false;
      crowd.visible=false;
      text("Do's",680,100);
mask.visible=true;
sanitizer.visible=true;
image (vaccine,690,400,50,50);

    }
  drawSprites();  
}
function c1(){
  if(frameCount%100===0){
    console.log(frameCount)
    coronavirus3=createSprite(random(100,800),random(100,800),60,60);
coronavirus3.addImage("coronavirus",angryvirus);
coronavirus3.scale=0.2;
coronavirus3.lifetime=50;
  }
}