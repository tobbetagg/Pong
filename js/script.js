// Deklarera variabler
var c, ctx, bollX = 100, bollY = 100, bollVX = -1, bollVY = 2;
var leftPLY = 100, rightPLY = 200, leftPLVY = 0, rightPLVY = 0;
var leftPlScore = 0, rightPlScore = 0;

var bgSound = new Howl({
    urls: ['sounds/bgsound.mp3']
}).play();

var bounceSound = new Howl({
    urls: []
}).play();

function init(){
    c = document.getElementById("duk");
    ctx = c.getContext("2d");

    // Kör update var 20e ms
    window.setInterval(update, 20);
}

function update(){
    // Sudda canvas
    ctx.clearRect(0, 0, c.width, c.height);
    // Måla boll
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.arc(bollX, bollY, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    // Måla paddlar
    ctx.fillRect(10, leftPLY, 20, 50);
    ctx.fillRect(370, rightPLY, 20, 50);


    // Flytta bollen
    bollX = bollX + bollVX;
    bollY = bollY + bollVY;
    // Flytta spelare
    leftPLY = leftPLY + leftPLVY;
    rightPLY = rightPLY + rightPLVY;

    // Studs
    if (bollY > 300){
        bollVY = -bollVY;
        bolly = 300;
    }

    else if (bollY < 0){
        bollVY = 2;
        bolly = 0;
    }

    //Studs mot vänster paddel
    if(bollX > 10 && bollX < 30 && bollY > leftPLY && bollY < leftPLY + 50){
        bollVX = -bollVX
        bounceSound.play();
    }

    //Studs mot höger paddel
    if(bollX > 10 && bollX > 370 && bollY > rightPLY && bollY < rightPLY + 50){
        bollVX = -bollVX
        bounceSound.play();
    }

    // Poäng
    if (bollX > 400){
        leftPlScore ++;
        document.getElementById("leftPlScore").innerHTML = "Vänster spelare: " + leftPlScore;
        bollX = 200;
    }

    else if (bollX < 0){
        rightPlScore ++;
        document.getElementById("rightPlScore").innerHTML = "Höger spelare: " + rightPlScore
        bollX = 200;
    }

}

function keyDown(e){
    // Knapptryck uppåt
    if(e.keyCode == 87){
        leftPLVY = -2;
    }
    // Knapptryck neråt
    if(e.keyCode == 83){
        leftPLVY = 2;
    }

    // Knapptryck uppåt
    if(e.keyCode == 38){
        rightPLVY = -2;
    }

    // Knapptryck neråt
    if(e.keyCode == 40){
        rightPLVY = 2;
    }
}