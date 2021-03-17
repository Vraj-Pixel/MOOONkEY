var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage, food;
var foodGroup, obstacleGroup;
var score=0;
var survivalTime=0;
var backgroundImage;
var bground;
var gameOver,gameOverImage;
var gameState=0;
var PLAY,END;

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage=loadImage("jungle.jpg");
  gameOverImage=loadImage("gameOver.png")
}



function setup() {
  createCanvas(600, 500);
  
  bground=createSprite(300,300,600,500);
  bground.addImage(backgroundImage);
  bground.x = bground.width/2;
  bground.scale=1.2
  bground.velocityX = -2
  
  

  monkey = createSprite(180, 445, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
 

  ground = createSprite(300, 500, 800, 10);
  ground.shapeColor = "Brown";
  ground.x = ground.width/2;
  ground.visible=false;

 

  foodGroup = createGroup();
  obstacleGroup = createGroup(); 
 
}


function draw() {
  background(0);
  //drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 550,50);
  if(gameState===PLAY){ 
    if(backgr.x<100){
     backgr.x=backgr.width/2;
     } 
    if(FoodGroup.isTouching(player)){ 
     FoodGroup.destroyEach();
     player.scale += 0.05;
     score = score + 2;
     }
     if(keyDown("space") ) {
      player.velocityY = -12; 
     } 
      player.velocityY = player.velocityY + 0.8;
      player.collide(ground); 
      spawnFood();
      spawnObstacles(); 
     if(obstaclesGroup.isTouching(player)){
        gameState = END; 
      } 
      
    }else if(gameState === END){ 
      backgr.velocityX = 0;
      player.visible = false;
      FoodGroup.destroyEach();
      obstaclesGroup.destroyEach();
      textSize(30);
      fill(255); 
      text("Game Over!", 300,220); 
    }
    drawSprites();
}
    
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,20);



function spawnFood() {
  if (frameCount % 80 === 0) {
    
    var food = createSprite(600, 450, 20, 40);
    food.y = Math.round(random(120, 200));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -5;
    food.lifetime = 600;
    foodGroup.add(food);
  }
 }
function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600, 460, 20, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -8;
    obstacle.lifetime = 600;
    obstacleGroup.add(obstacle);
  }
}

