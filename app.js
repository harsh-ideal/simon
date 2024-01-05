let h4=document.querySelector(`h4`);
let level=0;
let simon=[];
let player=[];
let status=false;
let a1=document.getElementById(`1`);
let b2=document.getElementById(`2`);
let c3=document.getElementById(`3`);
let d4=document.getElementById(`4`);
let count=0;
document.addEventListener(`keypress`,function(){
    if(status==false){
        status=true;
        
        let box=document.querySelector(`.btn-container div`);
        box.setAttribute(`type`,`button`);
        trig();
    }
})



a1.addEventListener(`click`,function(){
    if(status==true){
    inp(a1);
    }
})
b2.addEventListener(`click`,function(){
    if(status==true){
    inp(b2);
    }
})
c3.addEventListener(`click`,function(){
    if(status==true){
    inp(c3);
    }
})
d4.addEventListener(`click`,function(){
    if(status==true){
        inp(d4);
    }
})


function trig(){
        level++;
        h4.innerHTML=`<b>Level-${level}<b>`;
        let ranVal=Math.floor(Math.random()*4+1);
        simon.push(ranVal);
        let flash=document.getElementById(ranVal);
        console.log(ranVal);
        console.log(flash);
        setTimeout(() => {
            flash.classList.toggle(`flash`);
        }, 1000);
        setTimeout(() => {
            flash.classList.toggle(`flash`);
        }, 600);
}

// function inp(){
//     for(let i=0;i<simon.length;i++){
//         if(player[i]!=simon[i]){
//             h4.innerHTML=`<b>Wrong Answer! Game Over! \n Your Score is ${level-1}`;
//             simon=[];
//             player=[];
//             return;
//         }
//     }
//     player=[];
//     tiger();
// }

let inp=(a)=>{
    if(count==level-1){
       if(a.id==simon[count]){
        count=0;
        trig();
    }else{
        h4.innerHTML=`<b>Wrong Answer! Game Over! \n Your Score is ${level-1}`;
        simon=[];
        player=[];
        count=0;
        level=0;
        status=false;        
    }
}
else{
    
        if(a.id==simon[count]){
         count++;;
     }else{
         h4.innerHTML=`<b>Wrong Answer! Game Over! \n Your Score is ${level-1} \npress any key to restart the game`;
         status=false;
         simon=[];
         player=[];
         count=0;
         level=0;        
     }
}
}