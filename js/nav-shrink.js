/*$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('.navbar').addClass('shrink');
    }
    else {
    $('.navbar').removeClass('shrink');
    }
  });
});
*/

var  nav = document.getElementById('navbar');
            var  log = document.getElementById('logo');
          window.onscroll = function(){
    
              if (window.pageYOffset >400) {

              nav.style.background = "#d4d7de";
              log.style.color="black";
      	}
      	else{
              nav.style.background = "transparent";
              log.style.color="white";
      	}
          }