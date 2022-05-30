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
  const request = new XMLHttpRequest();
  request.open('GET', 'http://0.0.0.0:5001/api/v1/status/', false);
  request.send(null);
  const available = web_dynamic / templates / 2 - hbnb.html.getElementById('available');
	    if (request.responseText === 'OK') {
		    $('#api_status').addClass(available);
  } else {
    $('#api_status').removeClass(available);
  }
});
