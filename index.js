let gameSeq= [];
let userSeq =[];

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(started==false){
    started=true;
    levelUp();
   }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}


function levelUp() {
    userSeq=[];
    level++;
   h2.innerText=`Level ${level}`;

let randIdx=Math.floor(Math.random() * 4);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`#${randColor}`)
   gameSeq.push(randColor)
   gameFlash(randBtn);
   console.log(gameSeq)
}

function checkAns(idx) {
  if(userSeq[idx]==gameSeq[idx])  {
     
    if(userSeq.length==gameSeq.length){
         setTimeout(levelUp,1000)
    }

  } else{
    h2.innerHTML=`Game over! your score was <b>${level}</b><br> Press any key to start.`
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset() 
  }
} 


function btnPress() {
   userFlash(this); 
   userColor=this.getAttribute("id")
//    console.log(userColor)
  userSeq.push(userColor); 
//   console.log(userSeq)
   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn_container div")
    for(btn of allBtns){
        btn.addEventListener("click",btnPress)

    }
function reset() {
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0
}