var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  bullet = createSprite(400, 200, 60, 30);
  bullet.velocityX=speed;
  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(0);  
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0;
    damage=0.5*speed*speed*weight/(thickness*thickness*thickness);
    if (damage<10){
      wall.shapeColor="green";
    }
    if (damage>10){
      wall.shapeColor="red";
    }
  }
  drawSprites();
}
function hasCollided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}