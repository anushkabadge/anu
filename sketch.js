var catImg,catImg1,catImg2,catImg3,catImg4

var mouseImg,mouseImg1,mouseImg2,mouseImg3,mouseImg4

var  bgImg
function preload() {
  //load the images here
var catImg1=loadImage("cat1.png")
var catImg2=loadImage("cat2.png")
 var bgImg=loadImage("background.png") 
var catImg3=loadImage("cat3.png")
var catImg4=loadImage("cat4.png")
var mouseImg1=loadImage("mouse1.png")
var mouseImg2=loadImage("mouse2.png")
var mouseImg3=loadImage("mouse3.png")
var mouseImg4=loadImage("mouse4.png")



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  bgImg=createSprite("12,86,300,700")

  cat=createSprite(600,500)
  cat.addAnimation("catSleeping",catImg1 );
    cat.scale=0.2;

mouse=createSprite(1200,500)
mouse.addAnimation("mouseWalking",mouseImg1)
mouse.scale=0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
  if(cat.x-mouse.x < (cat.width - mouse.width)/2)
  


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (Keydown === LEFT_ARROW ){
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay=25;








}



}



