let body = document.querySelector("body");
let num =1 ;
body.addEventListener("click",(val)=>{
    let element = document.createElement("div");
    element.innerText=num;
    element.setAttribute("id","circle");
    element.style.left=val.clientX+"px";
    element.style.top=val.clientY+"px";
    body.appendChild(element);
   num++;
})