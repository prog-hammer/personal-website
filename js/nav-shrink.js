var  nav_bar = document.getElementById('navbar');
            var  log = document.getElementById('logo');
            var  top_button = document.getElementById('go-to-up');
            var  nav=document.getElementById('nav');
          window.onscroll = function(){
    
              if (window.pageYOffset >600) {
                
              nav_bar.style.background = "#000000";
              //nav_bar.style.background-image= linear-gradient(red, yellow);
              //nav_bar.style.opacity = 0.7;
              //log.style.color="black";
              top_button.style.display="block";
              //nav.classList.add("nav_animation");
              
        }
      	else{
              nav_bar.style.background = "transparent";
              //log.style.color="white";
              top_button.style.display="none";
              //nav.classList.remove("nav_animation");
        }
          }