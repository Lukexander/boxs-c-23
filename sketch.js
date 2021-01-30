const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World; 

var engine, bodies, world;
var ground;

var box1, box2, box3, box4;

function setup() {
  createCanvas(400,400);
  
engine = Engine.create();
world = engine.world;

var options = {
  isStatic: true
}

ground = Bodies.rectangle(200,390,400,20,options);
World.add(world, ground);


//console.log(ground);

box1 = new Box(200,300,50,50);
box2 = new Box(240,100,50,120);
box3 = new Box(240,200,50,20);
box4 = new Box(240,250,50,60);
}

function draw() {
  background("blue"); 
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
}