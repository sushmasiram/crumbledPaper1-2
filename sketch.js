
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,80,40);

	dustbin = new dustbin(660,600);
	ground1 = new ground(400, 680, 800, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  dustbin.display();
  paper1.display();
 
  ground1.display();
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:60, y:-73})
	}
}
