const canvas = document.getElementById("mainboard");
const ctx = canvas.getContext("2d");

const block_size = 30;
let x=0;
let y=0;
let dropInterval=10;
let timecnt=0;
let isfall = true;
let place = [];

function vertical_key(){
    //デフォルト→ソフトドロップ
    document.body.addEventListener
        ('keydown',function(e){
            if(e.code === 'KeyS' || e.code === 'ArrowDown')dropInterval=2;
        })

    //ソフトドロップ→デフォルト
     document.body.addEventListener
        ('keyup',function(e){
            if(e.code === 'KeyS' || e.code === 'ArrowDown')dropInterval=10;
        })
}

//落下処理
function vertical_move(){
    timecnt++;
    if(timecnt % dropInterval == 0 && isfall)y+=1;
    if(y==19 && isfall)isfall = false;
    draw();
}

//横移動処理
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

//描画
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(block_size*x,block_size*y,block_size,block_size);
}

draw();
horizontal_move();
vertical_key();

setInterval(vertical_move,100)