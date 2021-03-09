var balloon , balloonImg;
var bgImg;
function preload(){

  bgImg = loadImage("sky.png");
balloonImg = loadImage("hotballoon.png");

}
function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
 balloon = createSprite(400, 200, 50, 50);
 balloonImg.setAnimation("balloonImg")

}

function draw() {
  background(bgImg);  
  balloon.x = mouseX;
  balloon.y = mouseY;
  drawSprites();
}

function writePosition(x,y){

  database.ref('balloon/Position').set({
      'x': position.x + x , 
      'y': position.y + y          
  })
    
  }
  
  function readPosition(data){
  
  position = data.val();
  
     balloon.x = position.x;
 balloon.y = position.y;
  
  }
  
  function showError(){
  
  console.log("error in writing to the database")
  
  
  }
  
  