var road,roadimage;
var jaxon,jaxonrunning;
var edges;
var lvb;
var rvb;
var coin,coinimage
function preload(){
  //pre-load images
  jaxonrunning = loadAnimation("Runner-1.png","Runner-2.png");
  roadimage =loadImage("path.png");
  coinimage = loadImage("coin.png");
}


function coin123(){
  if(frameCount % 20 ===0  ){
  
     
  coin = createSprite(600,Math.round(random(10,20)),40,10);
  coin.addImage("coins2",coinimage);

 

   // coin.velocityY = -5;
    //coin.scale = 0.8
   // console.log(trex.depth);
    //console.log(cloud.depth);
    //cloud.depth = trex.depth;
    //trex.depth += 1;
  }
}

function setup(){
  createCanvas(400,400);
  road = createSprite(200,200)
  road.addImage("road123",roadimage);
  road.scale = 1.2;
  road.velocityY =  10;
  rvb = createSprite(410,0,100,800);
  //rvb.visible = false;
  lvb = createSprite(0,0,100,800);
  //lvb.visible = false;

  jaxon = createSprite(180,340,50,50)
  jaxon.addAnimation("running",jaxonrunning);
  jaxon.scale = 0.055;

  


}

function draw() {
  background("white");
  if (road.y > 400){
    road.y = height/2;  
  }
  
  
  jaxon.x = mouseX;

  drawSprites();
  text(mouseX+""+mouseY,mouseX,mouseY);
  edges = createEdgeSprites();
  
  jaxon.collide(rvb);
  jaxon.collide(lvb);
  coin123();

}
