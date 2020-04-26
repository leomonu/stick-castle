var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

  var outerBox1,outerBox2,innerBox1,innerBox2;
  var ground;

  var engine;
  var world;





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

    outerBox1 = new Box(0,250,200,100);
    outerBox2 = new Box(800,250,200,100);
    innerBox1 = new Box(200,400,250,50);
    innerBox2 = new Box(300,350,5000,200);
    ground = new Ground(0,400,2000,5);

    //tri1 = new Triangle(100,100,200,200,300,300);
    
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  outerBox1.display();
  outerBox2.display();
  innerBox1.display();
  innerBox2.display();
  //tri1.display();  
  triangle(0,100,50,50,100,100);
  triangle(800,100,750,50,700,100);
  drawSprites();
  
}