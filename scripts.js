var player = {
    top: 620,
    left: 450
}

var enemy = [
    {top: 300, left: 200},
    {top: 300, left: 300}
]

function drawPlayer(){
    output = "<div class='player' style = 'top:"+player.top+"px; left:"+player.left+"px';></div>";
    document.getElementById("players").innerHTML = output;
}
drawPlayer();

document.onkeydown = function(e){
    if(e.keyCode == 37){ // LEFT
        console.log(player.left);
        if(player.left > 0){
            player.left -= 10;
            console.log(player.left);
        }
    }
    if(e.keyCode == 38){ // UP
        console.log(player.top);
        if(player.top > 500){
            player.top -= 10;
            console.log(player.top);
        }
    }
    if(e.keyCode == 39){ // RIGHT
        console.log(player.left);
        if(player.left < 840){
        player.left += 10;
        console.log(player.left);
        }
    }
    if(e.keyCode == 40){ // DOWN
        console.log(player.top);
        if(player.top < 620){
            player.top += 10;
            console.log(player.top);
        }
    }
    drawPlayer();
}

function drawEnemy(enemy){
    output = "";
    for(var i = 0;i < enemy.length;i++){
        console.log(enemy[i]);
        console.log(enemy[i].left);
        output += "<div class='enemy' style = 'top:"+enemy[i].top+"px; left:"+enemy[i].left+"px;'></div>";
        console.log(output);
        document.getElementById("enemies").innerHTML = output;
    }
}
drawEnemy(enemy);