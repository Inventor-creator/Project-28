
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyimage
var tree,treeimage

function preload()
{
	boyimage = loadImage("Plucking mangoes/boy.png")
	treeimage = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);
background = "blue"

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	boy.addImage("boyimage",boyimage)

	tree = createSprite(700,600,10,10)
	tree.addImage("treeimage",treeimage)

	boy = new Boy(700,600,10,10)
	stone = new Stone(700,600,10,10)

	mango1 = new Mango()
	mango2 = new Mango()
	mango3 = new Mango()
	mango4 = new Mango()
	mango5 = new Mango()
	mango6 = new Mango()
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

boy.display();
stone.display()
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()

detectollision(stone,mango1)
detectollision(stone,mango2)
detectollision(stone,mango3)
detectollision(stone,mango4)
detectollision(stone,mango5)
  drawSprites();
 
}

function detectollision(Lstone,Lmango){
mangoBodyposition = Lmango.body.position
stoneBodyposition = Lstone.body.position

var distance = dist(stoneBodyposition.x,stoneBodyposition.y,mangoBodyposition.x,mangoBodyposition.y)
if(distance<=Lmango){
	Matter.body.setStatic(Lmango.body,false)
}

}


function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        boy.attach(stone.body);

    }
}


