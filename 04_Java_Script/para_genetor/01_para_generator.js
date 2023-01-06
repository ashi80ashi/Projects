const inp = document.getElementById("noOfWords");
let a = document.querySelector(".container")


const genWord = (n)=>{
    let text="";
    const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0; i<n; i++)
    {
        let ran = (Math.random()*25).toFixed(0)
        text += letters[ran];
    }
    
    return text;
}

let en = document.querySelector("input");

const genPara = () => {
    let data ="Lorem ";

    for(let i=0; i<en.value-1; i++){
        data += genWord((Math.random()*10).toFixed(0)).toLowerCase();
        data += " ";
    }
 console.log(en.value)
   let para= document.createElement("p");
   para.innerHTML=(data);
   para.setAttribute("class","paras")
   
   a.append(para)
}

