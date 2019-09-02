const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var date = new Date();
    
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    let hrPosition = (hr*360/12) + (min*(360/60)/12);
    let minPosition = (min*360/60) + (sec*(360/60)/60);
    let secPosition = sec*360/60;



function runTheClock() {

    hrPosition = hrPosition+(30/360)
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6


    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var internal = setInterval(runTheClock, 1000); 

var plainHour = document.querySelector ("#PlainHour"); 

// function showHour(){
//     var date = new Date();
//     let hr = date.getHours();
//     let min = date.getMinutes();
//     let sec = date.getSeconds();
//     var timer = setTimeout(clock, 1000);

function showHour(){
    var date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    // if(h > 12){
    //     h = h - 12;
    //     session = "PM";
    // }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;


    document.getElementById("plainText").innerHTML = time
    setTimeout(showHour, 1000);

    console.log(time);

}

showHour();





