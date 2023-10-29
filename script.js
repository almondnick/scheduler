$(function() {
  function displayDate() {
    var date = dayjs().format('MMMM D, YYYY');
    var dateEl = document.getElementById('currentDay');
    dateEl.textContent = date;
  }

  function saveText() {
    var textValue = $(this).siblings('.description').val();
    var hourValue = $(this).parent().attr('id');
    localStorage.setItem(hourValue, textValue);
  }

  $('.description').each(function(){
    var hourValue = $(this).parent().attr('id');
    $(this).val(localStorage.getItem(hourValue));
  });

  $('.saveBtn').on('click', saveText);

  $('.time-block').each(function() {
    var hourBlock = parseInt($(this).attr('id').split('-')[1]);
    var currentHour = dayjs().format('H');
    if (hourBlock < currentHour) {
      $(this).addClass('past');
    } else if (hourBlock > currentHour) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    }
  });

  displayDate();
})