
const now = moment().format('dddd MMMM Do YYYY');
const currentHour = moment().format('HH');

console.log(currentHour);

const $currentDate = $('#currentDay');
$currentDate.text(now);

$('.row').each(function () {
    var hour = $(this).attr("data-hour")
    if (hour === currentHour) {
        $(this).children('.description').addClass('present')
    } else if (hour > currentHour) {
        $(this).children('.description').addClass('future')
    } else if (hour < currentHour) {
        $(this).children('.description').addClass('past')
    }
});