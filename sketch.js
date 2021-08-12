const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,snowImg;



function preload() {
  backgroundImg = loadImage("snow1.jpg")
  snowImg= loadImage("snow4.webp")
  
   
}


function setup() {
  createCanvas(800,400);

 

}

function draw() {
  
 
  background(backgroundImg);
  
 
  snow();
  drawSprites();
}
function snow(){
  if(frameCount % 10 === 0) {
        
    var snow = createSprite(width + 200, height - 400, 40, 10);
    snow.x = Math.round(random(25, 790));
    //var snowtypes = snowtypes[snow1,snow2];
    //snow.addImage(random(snowtypes));
    snow.addImage(snowImg);
    snow.velocityY = 10;
    snow.scale=0.15;
   
  }
}