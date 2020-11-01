
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5, bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=100;

	//Create the Bodies Here.
	roof = new Roof(400,100,700,50)
	bob1 = new Bob(150,500,bobDiameter)
	bob2 = new Bob(250,500,bobDiameter)
	bob3 = new Bob(350,500,bobDiameter)
	bob4 = new Bob(450,500,bobDiameter)
	bob5 = new Bob(550,500,bobDiameter)
	rope1 = new Chain(bob1.body,roof.body,-1*20-200, 0)
	rope2 = new Chain(bob2.body,roof.body,-1*20-100, 0)
	rope3 = new Chain(bob3.body,roof.body,-1*20-0, 0)
	rope4 = new Chain(bob4.body,roof.body,-1*20+100, 0)
	rope5 = new Chain(bob5.body,roof.body,-1*20+200, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //keyPressed();
}

function keyPressed() 
{ if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})}}