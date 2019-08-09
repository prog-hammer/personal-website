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

            var  nav_bar = document.getElementById('navbar');
            var  log = document.getElementById('logo');
            var  top_button = document.getElementById('go-to-up');
            var  nav=document.getElementById('nav');
          window.onscroll = function(){
    
              if (window.pageYOffset >600) {

              nav_bar.style.background = "#d4d7de";
              log.style.color="black";
              top_button.style.display="block";
              nav.classList.add("nav_animation");
        }
      	else{
              nav_bar.style.background = "transparent";
              log.style.color="white";
              top_button.style.display="none";
              nav.classList.remove("nav_animation");
        }
          }
//mobile menu
          $(document).ready(function(){

            $("#burger-nav").on("click", function(){
            
                $("#nav ul").toggleClass("open");
                
            });
        
        });