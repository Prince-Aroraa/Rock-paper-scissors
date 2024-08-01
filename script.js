let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let you = document.querySelector("#your-score");
let comp = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let box = document.querySelectorAll(".box");
let msgCont = document.querySelector(".msg-cont");


// console.log(conv);

var yourCount = 0;
var compCount = 0;

const computerchoice=()=>{
    var randomNumb = Math.random();
    conv = Math.floor(randomNumb*3);
    let list = ["rock","paper","scissors"];
    Computer = list[conv];
    return Computer;
}

const Playgame = (your)=>{
    var computerChoose = computerchoice();

    if (your===computerChoose){
        msg.innerText=`It's a draw. Play Again.`;
        msg.style.backgroundColor="grey"
    }
    else if(your==="rock" && computerChoose==="scissors"){
        msg.innerText=`You Won, ${your} beats ${computerChoose}`;
        msg.style.backgroundColor="green"
        yourCount++;
        you.innerText=(yourCount);
    }
    else if(your==="paper" && computerChoose==="rock"){
        msg.innerText=`You Won, ${your} beats ${computerChoose}`;
        msg.style.backgroundColor="green"
        yourCount++;
        you.innerText=(yourCount);
    }
    else if(your==="scissors" && computerChoose==="paper"){
        msg.innerText=`You Won, ${your} beats ${computerChoose}`;
        msg.style.backgroundColor="green"
        yourCount++;
        you.innerText=(yourCount);
    }
    else{
        msg.innerText=`You Loose, ${computerChoose} beats ${your}`;
        msg.style.backgroundColor="red"
        compCount++;
        comp.innerText=(compCount);
    }

}


box.forEach((box)=>{
    box.addEventListener('click',()=>{
        let your = box.getAttribute("id");
        Playgame(your);
    })
})

