const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  engine , world ,  ground 
var box1 , box2 , box3 ,  ball , rope

function setup(){
    createCanvas(3000,800);

    engine = Engine.create()
    world = engine.world

    ground  = new Ground(1500 , 600 , 3000, 20);
    box1 = new Box(900,100,70,70);
    box2 = new Box(900 ,200,70,70);
    box3 = new Box(900,300,70,70);

    ball = new Ball(200,200,50,50);

    rope = new Rope(ball.body , {x:700 , y:150})
    
}
function draw(){
    background("white")

    Engine.update(engine)

    ground.display();
    box1.display();
    box2.display();
    box3.display();

    ball.display();

}
function mouseDragged(){
     Matter.Body.setPosition(ball.body , {x:mouseX ,  y:mouseY})

}