const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var ground1,box2,box3,box4,box5,box6;
var piggy,piggy2;
var log1,log2,log3 ,log4

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(600,400,1200,20);
    box1 = new Box(700,380,70,70);
    piggy = new Pig(800,380);
    box2 = new Box(900,380,70,70);
    log1 = new Log(800,280,300,20,PI)
    piggy2 = new Pig(800,240);
    box3 = new Box(900,240,70,70);
    box4 = new Box(700,240,70,70);
    log2 = new Log(800,200,300,20,PI);
    box5 = new Box(800,180,70,70);
    log3 = new Log( 750,130,20,170,PI/7);
    log4 = new Log(850,130,20,170,-PI/7);
    bird = new Bird(100,100);

    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    box1.display();
    piggy.display();
    box2.display();
    log1.display();
    piggy2.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    
}