let x=0;
let y=0;
let dropInterval=10;
let timecnt=0;
let cnt=0;
let place = [];
let CurrentMino;
let sevenbag = [...allMinos];
let randamIndex;
let pcolor = [];

function MinoOrder(){
    if(sevenbag.length == 0)sevenbag = [...allMinos];
    randamIndex = (Math.floor(Math.random()*sevenbag.length));
    CurrentMino = sevenbag[randamIndex];
    sevenbag.splice(randamIndex,1);
}

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
    
    //ハードドロップ
     document.body.addEventListener
        ('keydown',function(e){
            if(e.code === 'KeyW' || e.code === 'ArrowUp'){
                while(isfall(x,y))y++;
                landblock();
                draw();
            }
        })
}

//当たり判定
function isfall(x,y){
    for(let j=0;j<4;j++){
        if(y+CurrentMino.shape[j].y+1>19){
            return false;}
        for(let i=0;i<place.length;i++){
            if(place[i].x==x+CurrentMino.shape[j].x && place[i].y==y+CurrentMino.shape[j].y+1){
                return false;
            }}}
        return true;
    }

//ミノの記録
function landblock(){
    for(let i=0;i<4;i++){
        place.push({x:x+CurrentMino.shape[i].x,y:y+CurrentMino.shape[i].y});
        pcolor.push(CurrentMino.color);
    }
    x=0;
    y=0;
    MinoOrder();
}

//落下処理
function vertical_move(){
    timecnt++;
    let result = isfall(x,y);
    if(timecnt % dropInterval == 0 && result)y+=1;

    if(!result)landblock();
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

            for(let i=0;i<4;i++){
            if(x+CurrentMino.shape[i].x<0){x=0;break;}
            if(x+CurrentMino.shape[i].x>8){x=8;break;}
            }
            draw();
        })
}

MinoOrder();
draw();
horizontal_move();
vertical_key();

setInterval(vertical_move,100)