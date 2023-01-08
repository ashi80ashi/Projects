
let form = document.querySelector("form");
let container = document.querySelector(".container");

let tasks=[];

function rend(){
    let html='';
    tasks.forEach((value,index)=>{
        html+=`<div class="task" onClick='del(${index})' >
        <div>
            <p>${value.title}</p>
            <span>${value.description}</span>
        </div>
        <button>-</button>
        </div>`;
    });

    document.getElementById("taskholder").innerHTML=html;
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let index=1;
    let title = document.getElementById("title").value;
    let description =document.getElementById("description").value;
    tasks.push({title:title,description:description});
   // console.log(tasks);
    rend();
});

function del(index){
    delete tasks[index];
    rend();
}
