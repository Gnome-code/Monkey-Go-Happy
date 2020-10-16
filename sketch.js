
var monkey, monkey_run, ground
var banana ,banImg, obstacle, obsImg
var fGroup, obGroup
var survival = 0
var score = 0


function preload(){
  
  
  monkey_run = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  banImg = loadImage("banana.png");
  obImg = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(75, 450)
  monkey.addAnimation("e",monkey_run);
  monkey.scale = 0.15
  ground = createSprite(300, 498, 800, 10);
  ground.velocityX = -4
  fGroup = new Group()
  obGroup = new Group()
}


function draw() {
  survival = Math.ceil(frameCount/frameRate());
  background(255)
  if(monkey.isTouching(fGroup)){
    fGroup.destroyEach();
    score = score + 1
  }  
  stroke("black");
  fill("black");
  textSize(20);
  text("Score:"+  score, 500, 100);
  text("Survival time:"+  survival, 240, 80);
  fSpawn();
  obSpawn();
  drawSprites();
  ground.x = ground.width/2
  monkey.collide(ground)
  if(monkey.y > 446 && keyDown("space")){
    monkey.velocityY = -18
  }
  monkey.velocityY = monkey.velocityY + 0.6
}
    

function fSpawn(){
  if(frameCount % 80 == 0){
    var rand1 = Math.round(random(200,300))
    banana = createSprite (600,rand1)
    banana.addImage(banImg)
    banana.velocityX = -4
    banana.lifetime = 300
    banana.scale = 0.1
    fGroup.add(banana)
  }
  
}

function obSpawn(){
  if(frameCount % 300 == 0){
    var rand1 = Math.round(random(600,800))
    obstacle = createSprite (rand1, 480)
    obstacle.addImage(obImg)
    obstacle.velocityX = -4
    obstacle.lifetime = 300
    obstacle.scale = 0.1
    obGroup.add(banana)
  }
  
}




