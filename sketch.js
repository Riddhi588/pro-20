var gardenImg, cat , C1, mouse, M1, C2, M2;

function preload() {
    //load the images here
    C1 = loadImage("images/cat1.png", "images/cat4.png");
    C2 = loadImage("images/cat2.png" , "images/cat3.png");
    M1 = loadImage("images/mouse1.png");
    M2 = loadImage("images/mouse2.png" , "images/mouse3.png");
    gardenImg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,700,30,30);
    cat.addImage("cat",C1);
    cat.scale = 0.2;
    cat.velocityX = -3 ;

    mouse = createSprite(150,600,20,20);
    mouse.addImage("mice",M1);
    mouse.scale = 0.1;
    

}

function draw() {

    background(gardenImg);
    
    if(cat.x - mouse.x < (cat.width - mouse.width) /2) {

    }
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW) {
        mouse.addAnimation("mouseTeasing" , M2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25 ;
    }
 
    if(keyCode === RIGHT_ARROW) {
        mouse.addAnimation("mouseTeasing" , M2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25 ;
    }

}
