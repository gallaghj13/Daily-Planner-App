var hour = document.querySelectorAll(".hour");
var conatinerEl = document.querySelector(".conatiner");
var saveBtnEl = document.querySelectorAll(".saveBtn");
var textareaEls = document.querySelectorAll("textarea");
var spanEl = document.querySelectorAll("span");

var scheduledEventText = JSON.parse(localStorage.getItem("scheduled-event"));
var scheduledEventText = textareaEls;

var inputArray = [];


// Need time to display underneath the main banner header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// An event listener for the save buttons

$("#container-element").on('click', '.saveBtn', function(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    var textInput = $('span').prev("textarea").val();
    var textID = $('span').prev("textarea").attr("id");
    // console.log(textID);
    // var textObj.textID = textID;
    // textObj[textID] = textID;
    // localStorage.setItem("yourKey", JSON.stringify(textOBJ));
    var textObj = {
        id: textID,
        input: textInput,
    };
    inputArray.push(textObj);
    localStorage.setItem("ID-Input-Pair", JSON.stringify(textObj));

    localStorage.setItem("input-Array", JSON.stringify(inputArray));
    
    localStorage.setItem("scheduled-eventID", JSON.stringify(textID));

    localStorage.setItem("scheduled-event", JSON.stringify(textInput));
    $(textID).textContent = textInput;
    scheduledEvent();
    // need to call a save text function
});
// A function to save the input activity and keep it there, use of local storage
// Also need to make sure it is there upon refreshing the page
function scheduledEvent() {
    // localStorage.setItem("scheduled-event", scheduledEvent);

    var scheduledEventText = JSON.parse(localStorage.getItem("input-Array"));
    return scheduledEventText;
};

// A function that tracks the time and changes the colors of the input field, grey in the past, red current, green future
function textAreaColor() {
    var now = moment();
    var time = now.hour();
    console.log(time);
    for (var i=0; i < spanEl.length; i++) {
        var  timeOnPlanner = spanEl[i].textContent;
        console.log(timeOnPlanner);
        console.log(time);

    $('span').each(function() {

        if (timeOnPlanner > time) {
            $('span').eq(i).next().removeClass("present past").addClass("future");
        }
        else if (timeOnPlanner == time) {
            $('span').eq(i).next().removeClass("future past").addClass("present");
        }
        else {
            $('span').eq(i).next().removeClass("present future").addClass("past");
        }
        
})}};


// Need a function that resets all fields at a certain time, might as well be 6 since the planner ends at 5
// Might need to set an interval to reset content
function newDay() { 
    var now = moment();
    var time = now.hour();
    if (time < 1) {
        document.querySelector(".container").reset(); 
    }
};


// Initialize the site by bringing up the saved text and checking time
function init() {
    textAreaColor();

};

init();