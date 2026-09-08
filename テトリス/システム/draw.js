const canvas = document.getElementById("mainboard");
const ctx = canvas.getContext("2d");

const block_size = 30;

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(block_size*x,block_size*y,block_size,block_size);

    for(let i=0;i<cnt;i++){
        ctx.fillStyle = "blue";
        ctx.fillRect(block_size*place[i].x,block_size*place[i].y,block_size,block_size);
    }
}