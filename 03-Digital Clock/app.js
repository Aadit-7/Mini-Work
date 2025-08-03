let clock = document.querySelector(".digital-clock");
let Date1 = document.querySelector(".Date");

setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)
setInterval(()=>{
    let date = new Date();
    Date1.innerHTML = date.toLocaleDateString();
},1000)