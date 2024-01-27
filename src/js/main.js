$(document).ready(function(){




window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

  var mixer = mixitup('.img-section');
});


function opneNav(){
  document.getElementById("mobileNav").style.width ="100%"
}

function closeNav(){
  document.getElementById("mobileNav").style.width ="0%"
}
