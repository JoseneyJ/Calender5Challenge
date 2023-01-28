// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {


 // Add code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format("dddd MMMM D YYYY, h:mm a"));

 // Add a listener for click events on the save button. This code should
 // use the id in the containing time-block as a key to save the user input in
 // local storage.
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });


 // Add code to apply the past, present, or future class to each time
 // block by comparing the id to the current hour.
  function timeTracker() {
    var timeNow = dayjs().hour();

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour-")[1]);

      if (blockTime < timeNow) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");

      }
      else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");

      }
    })
  }

 
 // Add code to get any user input that was saved in localStorage and set
 // the values of the corresponding textarea elements.
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

  timeTracker()



});
