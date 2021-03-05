
const now = moment().format('dddd MMMM Do YYYY');
const currentHour = moment().format('h');

console.log(currentHour);

const $currentDate = $('#currentDay');
$currentDate.text(now);

/*let containerEl = $('.container');
let scheduleRowEl = $('<span>');
let scheduleInputEl = $('<input>');
let saveEl = $('<div>');

scheduleRowEl.text(currentHour);
scheduleRowEl.attr('class', 'col-12 col-md-2');
scheduleInputEl.attr('value', 'testing');
$(".element").attr("id","scheduleInput");
scheduleInputEl.addClass('col-12 col-md-8');
saveEl.text('Save');
saveEl.on('click', console.log(scheduleInputEl.value));
containerEl.append(scheduleRowEl, scheduleInputEl, saveEl);*/