let boxes = document.querySelectorAll('.box');  
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true; // playerX and playerO
let count=0; //to track draw

const winPatters = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

]; //this 2D array


const resetGame=()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box)=> {
    box.addEventListener("click", ()=> {
        
        if(turnO){
            box.innerText ="O";
            box.style.color = "red";
            turnO =false;
            
        }else{
            box.innerText ="X";
            box.style.color = "green";
            turnO =true;
        }
        
        box.disabled=true;  //ye kaam karega agar ek bar button click kr diya o ya x print ho gya to ab dubara nhi print kuch bhi click krne pe
        count++; 


        let isWinner=checkWinner();

        if(count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

 


const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};


const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
   disableBoxes();

};

const checkWinner=()=>{
    for(let pattern of winPatters){  //ye upar describe hain patterns
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
        }
       
            
        }
    }
}

newGameBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click",resetGame);