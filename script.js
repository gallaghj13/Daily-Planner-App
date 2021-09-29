var hour = document.querySelectorAll(".hour");
var conatinerEl = document.querySelector(".conatiner");
var saveBtnEl = document.querySelectorAll(".saveBtn");
var textareaEls = document.querySelectorAll("textarea");
var spanEl = document.querySelectorAll("t");


var scheduledEventText = textareaEls;



// Need time to display underneath the main banner header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
localStorage.setItem("today", today);

// An event listener for the save buttons

$(".saveBtn").on('click', function(event) {
    // event.siblingsentDefault();
    // event.stopPropagation();
    // event.stopImmediatePropagation();
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(time, description);
    localStorage.setItem(time, description)
    // var textObj.textID = textID;
    // textObj[textID] = textID;
    // localStorage.setItem("yourKey", JSON.stringify(textOBJ));
    // var textObj = {
    //     id: textID,
    //     input: textInput,
    // };
    // inputArray.push(textObj);
    // localStorage.setItem("ID-Input-Pair", JSON.stringify(textObj));

    // localStorage.setItem("input-Array", JSON.stringify(inputArray));
    
    // localStorage.setItem("scheduled-eventID", JSON.stringify(textID));

    // localStorage.setItem("scheduled-event", JSON.stringify(textInput));
    // $(textID).textContent = textInput;
    // scheduledEvent();
    // need to call a save text function
});

// A function that tracks the time and changes the colors of the input field, grey in the past, red current, green future

function textAreaColor() {
    var currentHour = moment().hours();
    console.log(currentHour);
    // for (var i=0; i < spanEl.length; i++) {
    //     var  timeOnPlanner = spanEl[i].textContent;
    //     console.log(timeOnPlanner);
    //     console.log(time);

    $('.description').each(function() {
        var timeOnPlanner = parseInt($(this).parent().attr("id").split('-')[1]);
        console.log(timeOnPlanner)
        if (timeOnPlanner < currentHour) {
            $(this).removeClass("present")
            $(this).removeClass('future')
            $(this).addClass("past");
        }
        else if (timeOnPlanner === currentHour) {
            $(this).removeClass("past")
            $(this).removeClass("future")
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present")
            $(this).removeClass("past")
            $(this).addClass("future");
        }
        
})};


// Need a function that resets all fields at a certain time, might as well be 6 since the planner ends at 5
// Might need to set an interval to reset content

// Thought is to use moment().isAfter(siblingsiousday) then reset everything
// function newDay() { 
//     var now = moment();
//     var currentTime = now.hour;
//     var initialTime = localStorage.getItem("today").val;
//     if (currentTime.day > initialTime.day) {
//         document.querySelector(".container").reset(); 
//     }
// };

$('#hour-9 .description').val(localStorage.getItem("hour-9"))
$('#hour-10 .description').val(localStorage.getItem("hour-10"))
$('#hour-11 .description').val(localStorage.getItem("hour-11"))
$('#hour-12 .description').val(localStorage.getItem("hour-12"))
$('#hour-13 .description').val(localStorage.getItem("hour-13"))
$('#hour-14 .description').val(localStorage.getItem("hour-14"))
$('#hour-15 .description').val(localStorage.getItem("hour-15"))
$('#hour-16 .description').val(localStorage.getItem("hour-16"))
$('#hour-17 .description').val(localStorage.getItem("hour-17"))


// Initialize the site by bringing up the saved text and checking time

function init() {
    textAreaColor();
};

init();