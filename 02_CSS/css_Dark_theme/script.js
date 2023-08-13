var body = document.getElementById("bd");
var button= document.getElementById("btn") ;

button.onclick = function(){
    if(button.className=="black"){
        button.className = "white" ;
        body.className="black";
    }
    else{
        button.className = "black" ;
        body.className="white";
    }
};
