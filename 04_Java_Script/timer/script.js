let dayselement = document.querySelector(".days")
let hourselement = document.querySelector(".hours")
let minuteselement = document.querySelector(".minutes")
let secondslement = document.querySelector(".seconds")

const second =1000;
const minute = 60 *second;
const hour = 60 * minute;
const day = 24 * hour;

//alert("Your coming birthday date MM/DD/YYYY format");
//let entereddate = prompt()

const timerfunction= (entereddate)=>{
    
      setInterval(() => {
        
        const timer = new Date(`${entereddate}`).getTime();
      //  console.log(timer)
    
        const today = new Date().getTime();
       // console.log(today)
    
        const diff = timer -today;
    
        let leftday =Math.floor(diff/day);
        let lefthour = Math.floor((diff%day)/hour);
        let leftminute = Math.floor((diff%hour)/minute);
        let leftsec = Math.floor((diff%minute)/second);

      //  console.log(`${leftday} : ${lefthour} : ${leftminute} : ${leftsec}`)

      dayselement.innerText= leftday;
      hourselement.innerText=lefthour;
      minuteselement.innerHTML=leftminute;
      secondslement.innerText = leftsec;

      }, 0);
}
document.getElementById("see").addEventListener("click",()=>{
  let entereddate = document.getElementById("entereddate");
  timerfunction(entereddate.value)
})
