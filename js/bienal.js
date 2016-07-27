$(function(){$('a.page-scroll').bind('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top},1500,'easeInOutExpo');event.preventDefault();});});$('body').scrollspy({target:'.navbar-fixed-top'})
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function(){$('.navbar-toggle:visible').click();});

$('.carousel').carousel({
  interval: 3000 //changes the speed
});

 function initMap() {
   var myLatLng_rectorado = new google.maps.LatLng(-31.6349758,-60.7048152);
   var myLatLng_foro = new google.maps.LatLng(-31.6505956,-60.7099174);

   var map1 = new google.maps.Map(document.getElementById('map1'), {
     zoom: 15,
     disableDefaultUI: true,
     scrollwheel: false,
     center: myLatLng_rectorado
   });

   var map2 = new google.maps.Map( document.getElementById('map2'), {
     zoom: 15,
     disableDefaultUI: true,
     scrollwheel: false,
     center: myLatLng_foro
   });

   var marker_rectorado = new google.maps.Marker({
     position: myLatLng_rectorado,
     map: map1,
     title: 'Rectorado UNL'
   });
   var marker_foro = new google.maps.Marker({
     position: myLatLng_foro,
     map: map2,
     title: 'Foro Cultural UNL'
   });
 }
