const canvas = document.getElementById("mainboard");
const ctx = canvas.getContext("2d");

const block_size = 30;
let x=0;
let y=0;

function horizontal_move(){
    document.body.addEventListener
        ('keydown',function(e){
            if(e.repeat)return;

            console.log('押されたキー:',e.code,' x=',x);
            if(e.code === 'KeyA' || e.code === 'ArrowLeft')x-=1;
            if(e.code === "KeyD" || e.code === 'ArrowRight')x+=1;

            if(x<0)x=0;
            if(x>9)x=9;
            draw();
        })
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(block_size*x,block_size*y,block_size,block_size);
}

draw();
horizontal_move();