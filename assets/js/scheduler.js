// place current date in the top
//need to fix the html part---
const now = moment();
const date = now.format();
///console.log(now.format("dddd, MMMM Do YYYY"));
document.getElementById("currentDay").innerHTML= now.format("dddd, MMMM Do YYYY");

//functions to create: saveAppt(), loadAppt() for local storage, auditAppt()

$(document).ready(function() {

  $(".saveBtn").on("click", function (){
    let value = $(this).siblings(".description").val()
    let time = $(this).parent().attr("id")
    localStorage.setItem(value,time);
    });
  
    function timeUpdate (){
      let currentTime=moment().hours();
      //loop of time
      $(".time-block").each(function() {
        let blockTime =parseInt($(this).attr("id").split("-")[1]);

      //compare where the time is
      if (blockTime < currentTime) {
        $(this).addClass("past");
      }
      else if (blockTime === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
    }
    timeUpdate();

    //time updates?
    let interval= setInterval(timeUpdate,15000);
console.log(interval);
    // load local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  });

function loadStorage(){
  let event = localStorage.getItem(value,time);
  if (event == null || event=="null"){
    localStorage.setItem(value,time);
  } else {
    localStorage.getItem(value,time);
  }
}
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