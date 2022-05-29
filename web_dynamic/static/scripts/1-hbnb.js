$(document).ready(function () {
  const myId = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked')) {
      myId[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete myId[$(this).attr('data-id')];
    }
    $('div.amenities h4').html(Object.values(myId).join(', '));
  });
});
