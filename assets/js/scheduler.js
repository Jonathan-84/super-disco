// place current date in the top
//need to fix the html part---
let now = moment();
let date = now.format();
///console.log(now.format("dddd, MMMM Do YYYY"));
document.getElementById("currentDay").innerHTML= now.format("dddd, MMMM Do YYYY");

