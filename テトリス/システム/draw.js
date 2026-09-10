const canvas = document.getElementById("mainboard");
const ctx = canvas.getContext("2d");

const block_size = 30;

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let j=0;j<4;j++){
        ctx.fillStyle = CurrentMino.color;
        ctx.fillRect(block_size*(x+CurrentMino.shape[j].x),block_size*(y+CurrentMino.shape[j].y),block_size,block_size);
        ctx.strokeStyle = "black";
        ctx.strokeRect(block_size*(x+CurrentMino.shape[j].x),block_size*(y+CurrentMino.shape[j].y),block_size,block_size);
    }

    for(let i=0;i<place.length;i++){
        ctx.fillStyle = pcolor[i];
        ctx.fillRect(block_size*place[i].x,block_size*place[i].y,block_size,block_size);
        ctx.strokeStyle = "black";
        ctx.strokeRect(block_size*place[i].x,block_size*place[i].y,block_size,block_size);
    }
}