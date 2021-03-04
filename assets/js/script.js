// create a variable for now
// create a bunch of inputs for each hour of the day
// create a save button on the right of each hour
// on click button should push input contents into array
// on pageload should pull saved contents from array and display them within correct hour
// current hour of day input should be red
// passed time input should be grey
// future time blocks should appear green

const now = moment().format('dddd MMMM Do YYYY');
const currentHour = moment().format('h');

console.log(currentHour);

const $currentDate = $('#currentDay');
$currentDate.text(now);

let containerEl = $('.container');
let scheduleRowEl = $('<div>');
scheduleRowEl.text = $(currentHour);
containerEl.append(scheduleRowEl);