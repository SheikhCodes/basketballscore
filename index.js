let scoreE1=document.getElementById("score1")
let scoreE2=document.getElementById("score2")

score=0
score1=0

function add1(){
    score+=1
    scoreE1.innerText=score
}

function add2(){
    score+=2
    scoreE1.innerText=score
}
function add3(){1
    score+=3
    scoreE1.innerText=score
}

function increment1(){
    score1+=1
    scoreE2.innerText=score1
}

function increment2(){
    score1+=2
    scoreE2.innerText=score1
}
function increment3(){
    score1+=3
    scoreE2.innerText=score1
}

function newgame(){
    score=0
    score1=0
    
    scoreE1.innerText=score
    scoreE2.innerText=score1
}
