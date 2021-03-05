
const now = moment().format('dddd MMMM Do YYYY');
const currentHour = moment().format('H');

console.log(currentHour);


//$('.row').each(function())
//    if (($this)dataset.hour === currentHour) {
//        set.child('description').addClass('present')
//    }
//}

/*$('.row').each(function(){
   console.log(this)
var hour = $(this).attr("data-hour")
    
    if (hour === currentHour) {
        $(this).addClass('present')
    }
})*/

$('.row').each(function () {
    var hour = $(this).attr("data-hour")
    if (hour === currentHour) {
        $(this).children('.description').addClass('present')
    } else if (hour > currentHour) {
        $(this).children('.description').addClass('past')
    } else (hour < currentHour) {
        $(this).children('.description').addClass('future')
    }
});