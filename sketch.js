
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball;

	var balls_option= {
	isStatic:false,
	restitution:0.03,
	friction :0, 
	density:1.2

}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	matter.bodies.circle(200, 200, 30);
	world.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  display()
 
 
  groundobj.display();



	groundobj= new ground (width/2670, width, 20);
	leftSide = new ground(1100, 600, 20, 120);


  drawSprites();
 
}

function keyPressed (up) {

if (keyCode === UP_ARROW){

	matter.body.applyForce  ( ball, {x:0, y:0}, {x:0, y:0.05}  )


}

}

function keyPressed (down) {

	if (keyCode === UP_ARROW){
	
		matter.body.applyForce  ( ball, {x:0, y:0}, {x:0, y:-0.05}  )
	
	
	}
	
	}

	
	function keyPressed (right) {

		if (keyCode === RIGHT_ARROW){
		
			matter.body.applyForce  ( ball, {x:0, y:0}, {x:0.05, y:0}  )
		
		
		}
		
		}

		
		function keyPressed (left) {

			if (keyCode === LEFT_ARROW){
			
				matter.body.applyForce  ( ball, {x:0, y:0}, {x:-0.05, y:0}  )
			
			
			}
			
			}
			
