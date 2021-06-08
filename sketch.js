const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, characterjumping, character;
var snowsound;
var snow = [];

function preload() {
  bg = loadImage("snow3.jpg");
  snowsound = loadSound("snow.mp3");
  characterjumping = loadAnimation("animation2.png", "animation1.png", "animation3.png");
}

function setup() {
  var canvas = createCanvas(999, 721);
  engine = Engine.create();
  world = engine.world;
  character = createSprite(765, 500, 20, 20);
  character.scale = 0.8;
  character.addAnimation("jumping", characterjumping);
  snowsound.play();
}

function draw() {
  background(bg);  
  Engine.update(engine);


  if(frameCount%2700 === 0) {
    snowsound.play();
  }
    if(frameCount%5===0) {
      snow.push(new Snow(random(10, 989), 0))
      
    }
    for(var j = 0; j<snow.length; j++) {
      snow[j].display()
    }

  drawSprites();
}