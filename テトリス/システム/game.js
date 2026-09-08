let x=0;
let y=0;
let dropInterval=10;
let timecnt=0;
let place = [];
let cnt=0;

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
                while(isfall(x,y+1))y++;
                landblock();
                draw();
            }
        })
}

//当たり判定
function isfall(x,y){
    if(y>19)return false;
    for(let i=0;i<place.length;i++){
        if(place[i].x==x && place[i].y==y){
            return false;
        }}
    return true;
}

//ミノの記録
function landblock(){
        place.push({x:x,y:y});
        x=0;
        y=0;
        cnt++;
    }

//落下処理
function vertical_move(){
    timecnt++;
    let result = isfall(x,y+1);
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

            if(x<0)x=0;
            if(x>9)x=9;
            draw();
        })
}

draw();
horizontal_move();
vertical_key();

setInterval(vertical_move,100)