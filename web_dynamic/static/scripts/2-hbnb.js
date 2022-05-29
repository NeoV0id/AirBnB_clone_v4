$(document).ready(function () {
    let myId = {};
    $('input[type=checkbox]').change( function () {
        if ($(this).prop('checked')) {
            myId[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete myId[$(this).attr('data-id')];
        }
    $('div.amenities h4').html(Object.values(myId).join(", "))
    })
    let request = new XMLHttpRequest();
	request.open("GET", "http://0.0.0.0:5001/api/v1/status/", false);
	request.send(null);
    let available = web_dynamic/templates/2-hbnb.html.getElementById("available")
	if request.responseText === "OK" {
		available.div#api_status.add
});
