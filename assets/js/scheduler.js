// place current date in the top
//need to fix the html part---
const now = moment();
const date = now.format();
///console.log(now.format("dddd, MMMM Do YYYY"));
document.getElementById("currentDay").innerHTML= now.format("dddd, MMMM Do YYYY");

//functions to create: createAppt(), loadAppt() for local storage ad saveAppt(), auditAppt()
let createAppt= function(apptText) {
}

console.log (document.querySelectorAll('.col-sm-8'));