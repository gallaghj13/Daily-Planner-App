var hour = document.querySelectorAll(".hour");
var conatinerEl = document.querySelector(".conatiner");
var saveBtnEl = document.querySelectorAll(".saveBtn");
var textareaEls = document.querySelectorAll("textarea");
var spanEl = document.querySelectorAll("span");


// Need time to display underneath the main banner header

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
localStorage.setItem("today", today);

// An event listener for the save buttons

$(".saveBtn").on('click', function(event) {
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(time, description);
    localStorage.setItem(time, description)
});

// A function that tracks the time and changes the colors of the input field, grey in the past, red current, green future

function textAreaColor() {
    var currentHour = moment().hours();

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


// Need a function that resets the local storage if it is a new day

function newDay() { 
    var day = moment(localStorage.getItem("today")).format("DDD");
    var checkDay = moment("DDD").isAfter(day);
    if (checkDay === true) {
        localStorage.clear(); 
    }
    return;
};

// Grabbing all of the submitted text to show in the text area

$('#hour-9 .description').val(localStorage.getItem("hour-9"))
$('#hour-10 .description').val(localStorage.getItem("hour-10"))
$('#hour-11 .description').val(localStorage.getItem("hour-11"))
$('#hour-12 .description').val(localStorage.getItem("hour-12"))
$('#hour-13 .description').val(localStorage.getItem("hour-13"))
$('#hour-14 .description').val(localStorage.getItem("hour-14"))
$('#hour-15 .description').val(localStorage.getItem("hour-15"))
$('#hour-16 .description').val(localStorage.getItem("hour-16"))
$('#hour-17 .description').val(localStorage.getItem("hour-17"))


// Initialize the site by checking the day and time, a new day clears local storage, the time will change the colors of the text areas

function init() {
    textAreaColor();
    newDay();
};

init();