var c, ctx, bollX = 100, bollY = 100, bollVX = -1, bollVY = 2;
var leftPY = 100, rightPY = 200, leftPVY = 0, rightPVY = 0;

function init( ){
    c = document.getElementById("duk");
    ctx = c.getContext("2d");
    
    //Kör update var 20e ms
    window.setInterval(update, 20);
}

function update(){
    //Sudda canvas
    ctx.clearRect(0,0,c.width, c.height);
    
    //Måla boll
    ctx.beginPath();
    ctx.arc(bollX, bollY, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    //Måla Paddlar
    ctx.fillRect(10, leftPY, 20, 50);
    ctx.fillRect(370, rightPY, 20, 50);
    
    //Flytta boll
    bollX = bollX + bollVX;
    bollY = bollY + bollVY;
    //Flytta spelare
    leftPY = leftPY + leftPVY;
    rightPY = rightPY + rightPVY;
    
    //Studs mot golv
    
    if(bollY > 300){
        bollVY = -bollVY;
        bollY = 300;
    }
    //Studs mot tak
    else if(bollY < 0){
        bollVY = 2;
        bollY = 0;
    }
    //Studs mot paddel
        if(bollX > 5 && bollX < 30 && bollY > leftPY && bollY < leftPY + 50 ){
            bollVX =  -bollVX;
            
        }
    
        
    
}

function keyDown(event){
    // Knapptryck uppåt
    if(event.keyCode == 87){
    leftPVY = -2;
    }
    
    if (event.keyCode == 83){
    leftPVY = 2;
    }
    
    if(event.keyCode == 38){
    rightPVY = -2;
    }
    
    if (event.keyCode == 40){
     rightPVY= 2;
    }
}
