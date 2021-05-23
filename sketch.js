var ball;

function setup(){
    createCanvas(600,600);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database()
    var dbref = database.ref('Position')
    dbref.on('value',readinfo)
    ball.addImage(boy)
}

function draw(){
    background(bg);
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    var dbref = database.ref('Position')
    dbref.set({
        x:ball.x + x,y:ball.y + y
    })
    
}
function readinfo(data){
var pos = data.val()
ball.x = pos.x;
ball.y = pos.y;
}
function preload(){
    bg = loadImage("sky.jpg")
    boy = loadImage("boy.png")
}