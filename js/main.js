$(document).scroll(function() {
	if($(this).scrollTop() > 250) {
		$('header').addClass('small');
	} else {
		$('header').removeClass('small');
	}
});


$(document).scroll(function() {
	if($(this).scrollTop() > 250) {
		$('.nav li a').css('padding', '31px 25px');
		$('.social li .fa').css('color', '#11749e');
	} else {
		$('.nav li a').css('padding', '46px 25px');
		$('.social li .fa').css('color', '#f5f5f5');
	}
});


// google map 

function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 44.8151597, lng: 20.5420641},
          zoom: 12,
          styles: [ { "elementType": "geometry", "stylers": [ { "color": "#212121" } ] }, { "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#212121" } ] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [ { "color": "#757575" } ] }, { "featureType": "administrative.country", "elementType": "labels.text.fill", "stylers": [ { "color": "#9e9e9e" } ] }, { "featureType": "administrative.land_parcel", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [ { "color": "#bdbdbd" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [ { "color": "#181818" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType": "poi.park", "elementType": "labels.text.stroke", "stylers": [ { "color": "#1b1b1b" } ] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [ { "color": "#2c2c2c" } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "color": "#8a8a8a" } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#373737" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#3c3c3c" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [ { "color": "#4e4e4e" } ] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#616161" } ] }, { "featureType": "transit", "elementType": "labels.text.fill", "stylers": [ { "color": "#757575" } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#000000" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#3d3d3d" } ] } ]
        });
      }


// Mobile button

$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('.nav').slideToggle();
	});
});


// Smooth scroll

$('.nav li a').click(function(event) {
	var scroll = $(this);
	$('html, body').animate({scrollTop: $(scroll.attr('href')).offset().top -85}, 1000);
	event.preventDefault()
});

//

$('.nav>li>a').click(function(){
    $('.nav').fadeOut();
    $('#nav-icon4').toggleClass('open')
});



//


$('.down').click(function(event) {
	var scroll = $(this);
	$('html, body').animate({scrollTop: $(scroll.attr('href')).offset().top -85}, 1000);
	event.preventDefault()
})

