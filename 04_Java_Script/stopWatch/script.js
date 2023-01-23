let ms=00;
let sec=00;
let min=00;
let stp;

let minelem = document.getElementById("min")
let secelem = document.getElementById("sec")
let mselem = document.getElementById("ms")

let timer = document.querySelector(".timer");
let startfun =()=>{
  stp=setInterval(() => {
        if(ms<97){
            ms++;
            
        }
        else if (sec>=59) {
            min++;
            sec=0
        }
        else{
            ms=00
            sec++; 
        }
    minelem.innerText =`${min}` ;
      secelem.innerText=`${sec}`;
        mselem.innerText=`${ms}`;
    }, 10);
}

let stopfun=()=>{
    clearInterval(stp)
    min=00,sec=00,ms=00;
}

let clearfun =()=>{
      minelem.innerText =`${min}` ;
      secelem.innerText=`${sec}`;
        mselem.innerText=`${ms}`
}