const canvas = document.getElementById("mainboard");
const ctx = canvas.getContext("2d");

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(50,50,50,50);
}

draw();