const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var backgroundImg

function preload(){
  backgroundImg = loadImage("snow2.jpg")
}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(255,255,255);  

  var s;
  for(i = 0; i < 800; i++){
    Snow = snow(i, 10, 10, 10)
  }

  drawSprites();
}