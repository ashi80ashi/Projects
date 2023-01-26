let slides = document.querySelectorAll(".slides");
let nxt = document.querySelector(".next");
let prev = document.querySelector(".prev");

let i = 0;
let ni;
nxt.addEventListener("click",()=>{
    slides[i].style.display="none";
    ni = (i+1)%slides.length;
    slides[ni].style.display="block";
    slides[ni].style.animation="left 1s ease-out";
    i=ni;
})
prev.addEventListener("click",()=>{
    let prvindx ;
    if(i == 0){
        prvindx = slides.length-1;
    }else{
       prvindx = i-1;
    }
    slides[i].style.display="none";
    slides[prvindx].style.display="block" ;
    slides[prvindx].style.animation="right 1s ease-out";
    i=prvindx;
})