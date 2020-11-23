
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1 , bob2 , bob3 , bob4 , bob5;
var roof;
var rope1 , rope2 , rope3 , rope4 , rope5;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(980 , 500 , 70);
	bob2 = new Bob(780 , 550 , 70);
	bob3 = new Bob(580 , 550 , 70);
	bob4 = new Bob(380 , 550  , 70);
	bob5 = new Bob(180 , 550 , 70);

	roof = new Roof(600 , 10);

	rope1 = new Rope(bob1.body , {x:980 , y:50});
	rope2 = new Rope(bob2.body,{x: 780 , y:50});
	rope3 = new Rope(bob3.body , {x:580 ,y:50 });
	rope4 = new Rope(bob4.body , {x:380 ,y:50});
	rope5 = new Rope(bob5.body ,{x:180 , y:50});


	Engine.run(engine);
	
  
}


function draw() {

  background(220);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
}

function mouseDragged()
{
	Matter.Body.setPosition(bob1.body , {x: mouseX , y: mouseY})
}




