let gseq=[];
let useq=[];
let btns=['green','red','purple','blue'];
let level=0;
let started=false;
let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started==false){
        console.log('game started');
        started=true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    }, 250);
}
function gflash(btn){
    btn.classList.add('gflash');
    setTimeout(function(){
        btn.classList.remove('gflash');
    }, 250);
}

function levelup(){
    useq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ran=Math.floor(Math.random()*3);
    let rcolor=btns[ran];
    let rbtn=document.querySelector(`.${rcolor}`);
    btnflash(rbtn);
    gseq.push(rcolor);
    console.log(gseq);
}

function btnpress(){
    let btn=this;
    gflash(btn);
    ucolor=btn.getAttribute('id');
    console.log(ucolor);
    useq.push(ucolor);
    checkseq(useq.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click',btnpress);
}

function checkseq(idx){
    if(useq[idx]===gseq[idx]){
        if(useq.length==gseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        h2.innerText=`Game Over! Your score is `+(level-1)+`\nPress any key to restart.`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },150);
        reset();
    }
}

function reset(){
    started=false;
    level=0;
    gseq=[];
    useq=[];
}

