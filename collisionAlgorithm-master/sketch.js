var fixed, moving;

function setup(){
  createCanvas(800,400);
  fixed = createSprite(400,200,100,60);
  fixed.shapeColor = "blue";
  fixed.debug = true;
  moving = createSprite(400,200.50,70);
  moving.shapeColor = "green";
  moving.debug = true;
}

function draw(){
  background("white");
  moving.x = mouseX;
  moving.y = mouseY;
  if (fixed.x - moving.x < fixed.width/2 + moving.width/2 &&
     moving.x - fixed.x < fixed.width/2 + moving.width/2 &&
     fixed.y - moving.y < fixed.height/2 + moving.height/2 &&
      moving.y - fixed.y < fixed.height/2 + moving.height/2){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";

  }
  else {
    moving.shapeColor = "green";
    fixed.shapeColor = "blue";
  }
  drawSprites();

}

