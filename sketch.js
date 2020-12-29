 Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var ground;
var particle;
var count;
var arr1 = [divisions.x, divisions.y ];
console.log(arr1);

var gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(40)
  text("Score : "+score,15,35);

  textSize(30)
  text(500,15,530);

  textSize(30)
  text(500,95,530);

  textSize(30)
  text(500,175,530);

  textSize(30)
  text(500,255,530);

  textSize(30)
  text(100,335,530);

  
  textSize(30)
  text(100,415,530);

  
  textSize(30)
  text(100,495,530);
  
  textSize(30)
  text(200,575,530);

  textSize(30)
  text(200,655,530);

  textSize(30)
  text(200,735,530);

  Engine.update(engine);
 
  if(particle != null){
particle.display();
if(particle.body.position.y > 760){
  if(particle.body.position.x <300){
    score=score+500;
    particle=null;
    if(count>=5)gameState = "end";
  }
}
  }
  if(particle != null){
    particle.display();
    if(particle.body.position.y > 760){
      if(particle.body.position.x >301 && particle.body.position.x <600){
        score=score+100;
        particle=null;
        if(count>=5)gameState = "end";
      }
    }
      }

      if(particle != null){
        particle.display();
        if(particle.body.position.y > 760){
          if(particle.body.position.x >601 && particle.body.position.x <900){
            score=score+200;
            particle=null;
            if(count>=5)gameState = "end";
          }
        }
          }


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  //for (var j = 0; j < particles.length; j++) {
   
    // particles[j].display();
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   ground.display();
   if(count===5){
     gameState="end";
     textSize(200);
     text("GameOver", 400,400);
   }
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particle(mouseX, 10, 10);
  }
}