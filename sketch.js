var canvas, backgroundImage;

var gameState = 0;

var girlImg, corona;

var bg1_img, bg2_img, bg3_img, bg4_img;

var bg1, bg2, bg3, bg4;

function preload(){
  //bg1_img = loadImage("images/game img 1.jpg");
  
  //bg2_img = loadImage("images/game img 2.png");
  bg3_img = loadImage("../images/game img 3.png");
  //bg4_img = loadImage("../images/game img 4.png");
}


function setup(){
  createCanvas(displayWidth - 20, displayHeight-30);

  //bg1=createSprite(width/2, height/2, displayWidth, displayHeight)
  //bg1.addImage(bg1_img)

  //bg2=createSprite(width/2, height/2, displayWidth, displayHeight)
  //bg2.addImage(bg2_img)
 
  bg3=createSprite(width/2, height/2, displayWidth, displayHeight)
  bg3.addImage(bg3_img)

  //bg4=createSprite(width/2, height/2, displayWidth, displayHeight)
  //bg4.addImage(bg4_img)
}


function draw(){
  drawSprites()
}

