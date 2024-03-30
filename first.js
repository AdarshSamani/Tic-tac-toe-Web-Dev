let boxes = document.querySelectorAll(".box");
let curr = true; //true O, false X
let msg = document.querySelector("#msg");
let msgcontent = document.querySelector(".msgcontent");
let reset = document.querySelector("#reset");
let restart = document.querySelector("#restart");

reset.addEventListener("click",()=>{
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    curr = true;
    msgcontent.classList.add("hide");
});

restart.addEventListener("click",()=>{
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    curr = true;
    msgcontent.classList.add("hide");
    
});
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(curr){
                box.innerText="O";
                curr = false; 
        }else{
                box.innerText="X";
                curr = true;     
        } 
        box.disabled = true;
        checkWinner();
        checkTie();
        
    });  
});

const checkTie = () =>{
    let full=true;

    for(box of boxes){
        if(box.innerText===""){
            full=false;
        }
    }
    if(full===true){
        msg.innerText = "Game Draw";
        msgcontent.classList.remove("hide");
        checkWinner();
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontent.classList.remove("hide");
}
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const checkWinner = () =>{
    for(pattern of winPatterns){
        pos1=boxes[pattern[0]].innerText;
        pos2=boxes[pattern[1]].innerText;
        pos3=boxes[pattern[2]].innerText;

        if(pos1!=="" && pos2!=="" && pos3!==""){
            if(pos1===pos2 && pos2===pos3){
                for(box of boxes){
                    box.disabled=true;
                }
                showWinner(pos1);
            }
        }

        
    }
}