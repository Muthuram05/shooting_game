function ishoot(enemy){
    enemy.classList.add("dead");
    if(!livingenemies().length){
        alert("YOU WIN");
        window.location.reload();
    }
}
function enemyattack(enemy){
    enemy.classList.add("showing");
    setTimeout(()=>{
        enemyshootme(enemy);
    },1000);
    setTimeout(()=>{
        enemy.classList.remove("showing");
    },3000)
}


function enemyshootme(enemy){
    if(!enemy.classList.contains("dead")){
        enemy.classList.add("shooting");
        updatehealthpoint(healthpoint - 10);
        setTimeout(()=>{
            enemy.classList.remove("shooting");
        },200)

    }

}

function livingenemies(){
    return document.querySelectorAll(".enemy:not(.dead)");
}
function randomenemyattack(){
    var randomenemyno=Math.random() * livingenemies().length;
    randomenemyno = Math.floor(randomenemyno);
    var enemy = livingenemies()[randomenemyno];
    var randomDelay = Math.random() * 2000 + 1000;
    setTimeout(()=>{
        enemyattack(enemy);
        randomenemyattack();
    },randomDelay)
}



//points
var healthpoint=100;
function updatehealthpoint(points){
    healthpoint=points;
    var healthbar = document.querySelector("#healthbar");
    healthbar.style.width = points + "%";
    if(healthpoint < 1){
        alert("game over");
        window.location.reload();
    }
}