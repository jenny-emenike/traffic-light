let switch_container = document.querySelector(".switch_container");
let btn_on = document.getElementById("on");
let btn_off = document.getElementById("off");

btn_on.addEventListener("click", show);

btn_off.addEventListener("click", notShow);
function show(){
 btn_on.classList.add("active");
 btn_off.classList.remove("active");
 greenLight();
 topBorderFunction();

showBorder();

}



function showBorder(){
switch_container.classList.add("standby");
}
let standBy;

function standByFunction(){
standBy = setTimeout(function(){
    btn_off.classList.remove("active");
}, 3000)
}

function notStandBy(){
//switch_container.classList.remove("standby");

if(switch_container.classList.contains("active")){
    standByFunction();
}
else{
    switch_container.classList.remove("standby");
     //btn_off.classList.add("active");
}
}

let greenTime
function greenLight(yellow_l){
let red = document.querySelector('#red');
red.classList.remove("lights");
let time = 20
let timeHolder = document.querySelector("#time-Holder");
timeHolder.style.color= "green";
timeHolder.innerHTML = time;


greenTime = setInterval(function(){
timeHolder.innerHTML = time-- + "s";

let green = document.getElementById("green");
green.classList.add("lights")

if(time <= 15){
yellowLight(redLight);
clearInterval(greenTime);
}


}, 1000)

}

let yellowTime
function yellowLight(red){
let time = 15
let timeHolder = document.querySelector('#time-Holder');
timeHolder.style.color = "yellow";
let green = document.querySelector('#green');
green.classList.remove("lights");

 yellowTime = setInterval(function(){
    timeHolder.innerHTML = time-- + "s";
    let yellow = document.getElementById("yellow");
    yellow.classList.add("lights");

    if(time ==1){
        redLight(greenLight);
        clearInterval(yellowTime);
    }

   
},1000)
}

let redTime
function redLight(green_l){
let time = 30
let timeHolder = document.querySelector("#time-Holder");
timeHolder.style.color = "red";
let green = document.querySelector('#green');
green.classList.remove("lights");
let yellow = document.querySelector('#yellow');
yellow.classList.remove("lights");

 redTime = setInterval(()=>{
    timeHolder.innerHTML = time-- + "s";
     let red = document.querySelector("#red");
     red.classList.add("lights");

     if(time == 0){
        greenLight(yellowLight);
        clearInterval(redTime);
     }

}, 1000)
}

function notShow(){
btn_on.classList.remove("active");
btn_off.classList.add("active")
notStandBy();
clearInterval(greenTime);
clearInterval(yellowTime);
clearInterval(redTime);
}

let topBorder ;
let leftBorder ;
let bottomBorder;
let rightBorder;

let topColor = "#" + Math.random().toString(16).substr(2, 6);
let rightColor = "#" + Math.random().toString(16).substr(2, 6);
let leftColor = "#" + Math.random().toString(16).substr(2, 6);
let bottomColor = "#"+ Math.random().toString(16).substr(2, 6);


function topBorderFunction(){
let traffic = document.querySelector(".traffic-light");
clearInterval(leftBorder);
topBorder = setInterval(function(){
 traffic.style.borderTopColor = topColor;
 traffic.style.borderLeftColor = "";
 rightBorderFunction();

}, 2000)

}

function rightBorderFunction(){
let traffic = document.querySelector(".traffic-light");
clearInterval(topBorder);
rightBorder = setInterval(function(){
    traffic.style.borderRightColor = rightColor;
    traffic.style.borderTopColor = "";
    bottomBorderFunction();
}, 2000)
}


function bottomBorderFunction(){
let traffic = document.querySelector(".traffic-light");
clearInterval(rightBorder);
bottomBorder = setInterval(function(){
    traffic.style.borderBottomColor = bottomColor;
    traffic.style.borderRightColor = "";
    leftBorderFunction();

}, 2000)
}

function leftBorderFunction(){
let traffic = document.querySelector(".traffic-light");
clearInterval(bottomBorder);
leftBorder = setInterval(function(){
    traffic.style.borderBottomColor = "";
    traffic.style.borderLeftColor = leftColor;
    topBorderFunction();

}, 2000)
}