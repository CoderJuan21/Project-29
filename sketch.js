const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var block1;
var polygon;
var slingShot;



function setup() {
  var canvas = createCanvas(800,400);
   engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);

  ground = new Ground(600,200,200,20);

  block1 = new Box(540,150,55,55);
 block2 = new Box(600,150,55,55);
 block3 = new Box(660,150,55,55);
 block4 = new Box(570,100,55,55);
 block5 = new Box(630,100,55,55);
 block6 = new Box(600,50,55,55);

 polygon = new Box(400,600,50,50);

 //polygon=createSprite(600,200,20,100);
 //polygon = Bodies.rectangle(300,600,20,100, {isStatic:true} );
	// World.add(world, block1);

   slingshot = new SlingShot(polygon.body,{x:300, y:150});
 
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  polygon.display();

  slingshot.display();

  drawSprites();

 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}