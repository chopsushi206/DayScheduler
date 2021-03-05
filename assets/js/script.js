// variable to set moment to format Tuesday, March 1st 2021
const now = moment().format('dddd MMMM Do YYYY');
// variable to set moment in format of the hour, in a 24 hour span. (01-24)
const currentHour = moment().format('HH');
// variable $currentDate equal to currentDay
const $currentDate = $('#currentDay');
// sets the text of currentDate to ID currentDay in index.html
$currentDate.text(now);

// function for each div with class of row
$('.row').each(function () {
    // hour is equal to this rows dataset.hour
    let $hour = $(this).attr("data-hour")
    // if both variables equal
    if ($hour === currentHour) {
        // add class of present to this rows child with class of description
        $(this).children('.description').addClass('present')
        // if hour is greater than current hour add class of future to this rows child with class of description
    } else if ($hour > currentHour) {
        $(this).children('.description').addClass('future')
        // if hour is less than current hour add class of past to this rows child with class of description
    } else if ($hour < currentHour) {
        $(this).children('.description').addClass('past')
    }
});

$('.row').each(function () {
    let $saveBtnEl = $(this).children[2]
   // let $scheduleInfo = $(this).children[1].val
   // $saveBtnEl.click(console.log($scheduleInfo))
    console.log(this.children[1].value)
    console.log(this.children[2]);
})