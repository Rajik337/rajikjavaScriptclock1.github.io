setInterval(()=>{
a = new Date();
let H = a.getHours() ;
let M = a.getMinutes();
let S = a.getSeconds();
let milisec =a.getMilliseconds();
let date= a.getDate();
let month = a.getMonth();
let year = a.getFullYear();
document.getElementById("times").innerHTML= H+":"+M+":"+S + ":"+milisec+" on "+ date +":"+ month +":"+ year ;}
,1)