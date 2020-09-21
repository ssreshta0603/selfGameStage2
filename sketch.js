var manFroViewImg,manBackViewImg,manRightViewImg,manLeftViewImg;
var saniImg,virus1Img,virus2Img,virus3Img;
var man,sanitizer1,sanitizer2,sanitizer3,sanitizer4;
var virus1,virus2,virus3;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall,wall,wall,wall,wall,wall,wall,wall,wall
wall
function preload(){
manFroViewImg = loadAnimation("manfroviews/manfroview1.png","manfroviews/manfroview2.png","manfroviews/manfroview3.png",
"manfroviews/manfroview4.png","manfroviews/manfroview5.png","manfroviews/manfroview6.png","manfroviews/manfroview7.png",
"manfroviews/manfroview8.png","manfroviews/manfroview9.png");

manBackViewImg = loadAnimation("mantopviews/mantopview1.png","mantopviews/mantopview2.png","mantopviews/mantopview3.png"
,"mantopviews/mantopview4.png","mantopviews/mantopview5.png","mantopviews/mantopview6.png","mantopviews/mantopview7.png"
,"mantopviews/mantopview8.png","mantopviews/mantopview9.png");

manRightViewImg  = loadAnimation("manrightviews/manrightview1.png","manrightviews/manrightview2.png",
"manrightviews/manrightview3.png","manrightviews/manrightview4.png","manrightviews/manrightview5.png",
"manrightviews/manrightview6.png","manrightviews/manrightview7.png","manrightviews/manrightview8.png",
"manrightviews/manrightview9.png");

manLeftViewImg = loadAnimation("manleftviews/manleftview1.png","manleftviews/manleftview2.png","manleftviews/manleftview3.png"
,"manleftviews/manleftview4.png","manleftviews/manleftview5.png","manleftviews/manleftview6.png","manleftviews/manleftview7.png"
,"manleftviews/manleftview8.png","manleftviews/manleftview9.png");

saniImg = loadImage("power/sanitizer.png");
virus1Img = loadImage("viruses/virus1.png");
virus2Img = loadImage("viruses/virus2.png");
virus3Img = loadImage("viruses/virus3.png");
maze = loadImage("maze.png");
}
function setup() {
  createCanvas(1000,700);
 
  wall1 = createSprite(500,695,1000,10);
  wall2 = createSprite(500,5,1000,10);
  wall3= createSprite(5,40,10,400);
  wall4= createSprite(995,100,10,300);
  wall5= createSprite(5,600,10,400);
  wall6= createSprite(995,560,10,400);
  wall7= createSprite(5,250,320,50);
  wall8= createSprite(995,250,320,50);
  wall9= createSprite(5,400,320,50);
  wall10= createSprite(995,380,320,50);
  //
  wall11= createSprite(130,100,100,50);
  wall12= createSprite(330,100,100,50);
  wall13= createSprite(860,100,100,50);
  wall14= createSprite(660,100,100,50);
  //
  wall15= createSprite(130,200,100,20);
  wall16= createSprite(860,200,100,20);
  //
  wall17= createSprite(500,50,50,100);
  //
  wall18= createSprite(500,240,50,60);
  wall19= createSprite(500,200,200,25);
  //
  wall20= createSprite(280,290,35,130);
  wall21= createSprite(340,300,100,30);
  //
  wall22= createSprite(720,290,35,130);
  wall23= createSprite(660,300,100,30);
  //
  wall26= createSprite(660,520,100,20);
  wall27= createSprite(330,520,100,20);
 //
  wall32= createSprite(500,430,200,25);
  wall33= createSprite(500,480,45,80);
//
  wall34= createSprite(240,680,300,20);
  wall35= createSprite(270,640,45,60);
  //
  wall36= createSprite(750,680,300,20);
  wall37= createSprite(710,640,45,60);
  //
  wall38= createSprite(100,600,100,15);
  wall39= createSprite(125,570,30,50);
//
  wall40= createSprite(900,600,80,15);
  wall41= createSprite(870,565,30,50);
//
  wall42= createSprite(10,485,80,20);
  wall43= createSprite(990,480,80,20);

  box1 = createSprite(500,350,200,100);
  box2 = createSprite(500,350,180,80);
  box3 = createSprite(500,295,60,10);
 
  box1.shapeColor = "lightBlue";
  box2.shapeColor = "white";
  box3.shapeColor = "white";
  man = createSprite(450,550,20,20);
 man.addAnimation("BackView",manBackViewImg);
 man.addAnimation("frontView",manFroViewImg);
 man.addAnimation("rightView",manRightViewImg);
 man.addAnimation("leftView",manLeftViewImg);
//man.scale = 0.5;

 virus1 = createSprite(50,270,20,20);
virus1.addImage(virus1Img);
virus1.scale = 0.15;
//
 virus2 = createSprite(100,270,20,20);
 virus2.addImage(virus2Img);
 virus2.scale = 0.5;

 virus3 = createSprite(950,270,20,20);
virus3.addImage(virus3Img);
virus3.scale = 0.5;

 sanitizer1 =createSprite(50,100,20,20);
 sanitizer1.addImage(saniImg);
 sanitizer1.scale = 0.15;

 sanitizer2 = createSprite(950,100,20,20);
sanitizer2.addImage(saniImg);
sanitizer2.scale = 0.15;

 sanitizer3 = createSprite(50,530,20,20);
sanitizer3.addImage(saniImg);
sanitizer3.scale = 0.15; 

 sanitizer4 = createSprite(950,530,20,20);
 sanitizer4.addImage(saniImg);
sanitizer4.scale = 0.15;

 walls = new Group()
 viruses = new Group()
  edges = createEdgeSprites();

}

function draw() {
  background("white");  
 walls.add(wall1)
  walls.add(wall2)
  walls.add(wall3)
  walls.add(wall4)
  walls.add(wall5)
  walls.add(wall6)
  walls.add(wall7)
  walls.add(wall8)
  walls.add(wall9)
  walls.add(wall10)
  walls.add(wall11)
  walls.add(wall12)
  walls.add(wall13)
  walls.add(wall14)
  walls.add(wall15)
  walls.add(wall16)
  walls.add(wall17)
  walls.add(wall18)
  walls.add(wall19)
  walls.add(wall20)
  walls.add(wall21)
  walls.add(wall22)
  walls.add(wall23)

  walls.add(wall26)
  walls.add(wall27)
 
  walls.add(wall32)
  walls.add(wall33)
  walls.add(wall34)
  walls.add(wall35)
  walls.add(wall36)
  walls.add(wall37)
  walls.add(wall38)
  walls.add(wall39)
  walls.add(wall40)
  walls.add(wall41)
  walls.add(wall42)
  walls.add(wall43)
 
  viruses.add(virus1);
  viruses.add(virus2);
  viruses.add(virus3);
   man.collide(walls);
 
   if(keyDown(UP_ARROW)){
   man.velocityY = -4;
   man.velocityX = 0;
   man.changeAnimation("BackView");
 }

 if(keyDown(DOWN_ARROW)){
   man.velocityY = 4;
   man.velocityX =0;
   man.changeAnimation("frontView");
 }

 if(keyDown(RIGHT_ARROW)){
   man.velocityX = 4;
   man.velocityY = 0;
   man.changeAnimation("leftView");
 }

 if(keyDown(LEFT_ARROW)){
   man.velocityX = -4;
   man.velocityY = 0;
   man.changeAnimation("rightView");
 }

 virus1.collide(edges[2]);
 virus1.collide(edges[3]);
//viruses.collide(walls)
 man.collide(edges[2]);
 man.collide(edges[3]);
 virus1.velocityX = 4
 virus1.velocityY = 5
if(walls.isTouching(virus1)){
 // viruses.setVelocityXEach(-5);
//  viruses.setVelocityYEach(-6);
virus1.x=virus1.x+16;
virus1.velocityX = (virus1.velocityX)*(-1);
virus1.y=virus1.y+16;
virus1.velocityY = (virus1.velocityY+20)*(-1);
console.log(virus1.velocityX);
console.log(virus1.velocityY);
}
virus2.velocityX = 10
virus2.velocityY = 5

virus3.velocityX =-4
virus3.velocityY = 15

  drawSprites();
}
