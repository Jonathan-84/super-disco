// place current date in the top
//need to fix the html part---
const now = moment();
const date = now.format();
///console.log(now.format("dddd, MMMM Do YYYY"));
document.getElementById("currentDay").innerHTML= now.format("dddd, MMMM Do YYYY");

//functions to create: saveAppt(), loadAppt() for local storage, auditAppt()


  $(".saveBtn").on("click", function (){
    let value = $(this).siblings(".description").val()
    let time = $(this).parent().attr("id")
    localStorage.setItem(value,time)
    });
  
  //let appointment= JSON.parse(localStorage.getItem("appointment"))
//if (appointment == null && appointment == 'null') {
   // events.push(currentEvent)
 //   localStorage.setItem('appointment',JSON.stringify(appointment))
//}      
   // let currentEvent={
     //   description:description.value,
       // hour: hour.value
   // }
  //  events.push(currentEvent)
    //localStorage.setItem('appointment',JSON.stringify(appointment))
//};
/*
$('description').on('click', function(event) {
event.preventDefault();
let currentEvent= $('description').val().trim();
appointment.push(currentEvent);
renderEvents(appointment)
localStorage.setItem('appointment',JSON.stringify(appointment));
$('description').val('');
*/