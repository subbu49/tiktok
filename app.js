
let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newGameBtn =document.querySelector("#new-btn");
let msgContanier =document.querySelector(".msg-container")
let msg =document.querySelector("#msg")

let turnO = true;//playerX,player0

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],

];

const resetGame=()=>{
    turnO=true;
    enableboxes();// clear the board and enable buttons
    msgContanier.classList.add("hide")// hide the win message
};
 


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO){
          box.innerText="O";
          turnO=false;

    }else {
        box.innerText="X";
        turnO =true ;

    }
    box.disabled= true;

    checkwinner()
    });
});



const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



const showWinner=(winner)=>{
    msg.innerText= `congratulations,winner is ${winner}`;
    msgContanier.classList.remove("hide");
    disableboxes();
    
}


const checkwinner=()=> {
    for (let pattern of winpatterns){
        console.log(pattern[0],pattern[1],pattern[2])
        console.log(boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText,
        );
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !="" ){
            if (pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val)
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);


