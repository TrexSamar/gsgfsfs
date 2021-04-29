
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var enemy, enemy2, meteor, planet, spaceShip, star, bullet;  
var enemy_img, enemy2_img, meteor_img, planet_img, spaceShip_img, star_img, bullet_img;
var enemy_group, bullet_group
var edges
var score=0
var life = 3
var bulletCount = 50


function preload()
{
//loading the images
enemy_img = loadImage("Game Images/Enemy.png")
enemy2_img = loadImage("Game Images/Enemy2.png")
meteor_img = loadImage("Game Images/Metor.png")
planet_img = loadImage("Game Images/planet.png")
spaceShip_img = loadImage("Game Images/spaceShip.png")	
star_img = loadImage("Game Images/star.png")	
bullet_img = loadImage("Game Images/bullet.png")

}

function setup() {
	createCanvas(800, 800);
	sky = createSprite(400, 400, 800, 800);
	sky.shapeColor = "#00008b"
	sky.velocityY = -1

	edges = createEdgeSprites();

	planet = createSprite(200, 400);
	planet.addImage("planet", planet_img)
	planet.scale = 0.1

	  enemy_group = new Group();
	  bullet_group = new Group();

 	spaceShip = createSprite(320, 500);
	spaceShip.addImage("spaceShip", spaceShip_img)
	spaceShip.scale = 0.1

	

	

	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	spaceShip.bounceOff(edges)


if(sky.y < 400){

	sky.y = 400

}
if(keyDown(UP_ARROW) || keyDown("W")){

spaceShip.y = spaceShip.y -7

}
if(keyDown(DOWN_ARROW) || keyDown("S")){

	spaceShip.y = spaceShip.y +7
	
}
if(keyDown(LEFT_ARROW) || keyDown("A")){

	spaceShip.x = spaceShip.x -7
	
}
if(keyDown(RIGHT_ARROW) || keyDown("D")){

	spaceShip.x = spaceShip.x +7
	
}

	if(keyWentDown("SPACE")){
bullets();
		bullet.x = spaceShip.x
		bullet.velocityY = -5	
		bullet.y = spaceShip.y
		//if(enemy_group.isTouching(bullet)){
		bulletCount = bulletCount - 1
		//	 enemy_group.destroy()
	
	//	}
	}

	




	spawnStars();
	spawnEnemies();
  drawSprites();
  fill("white")
  text("Score: " + score, 700, 50)
  text("Lives Left: " + life, 100, 50 )
  text("Bullet Count: " + bulletCount, 700, 750)

}

function spawnStars(){
//Spawing the stars randomly

	if(frameCount%30===0){


	star = createSprite(400, 300);
	star.addImage("star", star_img)
	star.scale = 0.01

		star.x = Math.round(random(10, 790))
		star.y = Math.round(random(10, 790))
		star.velocityY = -1
		star.lifetime=800
	spaceShip.depth = star.depth
	spaceShip.depth = spaceShip.depth + 1

	

	}
}

function spawnEnemies(){

 if(frameCount%100 === 0){

	enemy = createSprite(200, 300);
	enemy.velocityY = 3
	enemy.x = Math.round(random(100, 700))
	enemy.y = Math.round(random(10, 50))
	enemy.lifetime = 800

	var num = Math.round(random(1, 3))
	if(num === 1){

	
	enemy.addImage("enemy", enemy_img)
	enemy.scale = 0.1

	}
else if(num === 2){

	enemy.addImage("enemy2", enemy2_img)
	enemy.scale = 0.17

}

else if(num === 3){

 
	enemy.addImage("meteor", meteor_img)
	enemy.scale = 0.1

}

 }

 //enemy_group.add(enemy)

}

function bullets(){

	bullet = createSprite(370, 500);
	bullet.addImage("bullet", bullet_img)
	bullet.scale = 0.05

		if(bulletCount <= 0){ 

	return bullet

		}
else{

return null

}

//bullet_group.add(bullet)




}


