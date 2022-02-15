const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var ground;
var background1;
var tower;
var towerimg;
var angle;
var cannonball;




function preload() {
  background1 = loadImage("assets/background.gif")
  towerimg = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  
  var options={
    friction: 0,
    isStatic: true
  }
 //this.body = Bodies.rectangle(x,y,w,h,options)
 ground = Bodies.rectangle(0,height-1,width*2,1,options)
 //World.add(world,this.body)
 World.add(world,ground)

 tower = Bodies.rectangle(160,350,160,310,options)
 World.add(world,tower)
 

 cannonball = new CannonBall(50,50,20)
}

function draw() {
  background(189);
 image (background1,0,0,1200,600)
  Engine.update(engine);
  
   rect(ground.position.x,ground.position.y,width*2,1)

   push ()
   imageMode (CENTER)
   image(towerimg,tower.position.x,tower.position.y,160,310)
   pop ()

   
   cannonball.display()
}
