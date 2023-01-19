//adding eventlistner on tyres

let wheel = document.getElementById("wheel");
wheel.addEventListener("click",anim)
function anim() {
        document.getElementById("carbody").style.animation="carotateup 2s ease-in ";
        document.getElementById("car").style.animation="carmove 5s ease-out ";
      //  wheel.style.animation="rtfst 0.5s linear infinite"
        setTimeout(() => {
            document.getElementById("carbody").style.animation="";
            document.getElementById("car").style.animation=""; 
        }, 5000);
}
let wheel2 = document.getElementById("wheel2");
wheel2.addEventListener("click",()=>{
    document.getElementById("carbody").style.animation="carotatedwn 3s ease-in-out ";
    document.getElementById("car").style.animation="carmove 5s ease-out ";

    setTimeout(() => {
        document.getElementById("carbody").style.animation="";
        document.getElementById("car").style.animation=""; 
    }, 5000);
})



// adding listner to increase the brigthness of car

// let car = document.getElementById("car");
// car.addEventListener("mouseover",()=>{
//     car.style.filter="brightness(150%)";
// })
// car.addEventListener("mouseout",()=>{
//     car.style.filter="brightness(100%)";
// })


//adding listner to sky 

let sky = document.getElementById("sky")
sky.addEventListener("mouseover",()=>{
    sky.style.filter="grayscale(100)";
})
sky.addEventListener("mouseout",()=>{
    sky.style.filter="";
})


//adding listner to on off the light
let light = document.getElementById("light");
let onbtn = document.getElementById("onbtn");
onbtn.addEventListener("click",()=>{
    light.style.visibility="visible";
})

let offbtn = document.getElementById("offbtn");
offbtn.addEventListener("click",()=>{
    light.style.visibility="hidden"
})


// //changing car 
let white = document.getElementById("white");
white.addEventListener("click",()=>{
    document.getElementById("carbody").setAttribute("src","/car.png")
})
let blue = document.getElementById("blue");
blue.addEventListener("click",()=>{
    document.getElementById("carbody").setAttribute("src","/car1.png")
})

let greeen = document.getElementById("greeen");
greeen.addEventListener("click",()=>{
    document.getElementById("carbody").setAttribute("src","/car2.png")
})

let yellow = document.getElementById("yellow");
yellow.addEventListener("click",()=>{
    document.getElementById("carbody").setAttribute("src","/car3.png")
})