let OverlayMenuBtn = document.querySelector(".OverlayMenuBtn")
let OverlayMenu = document.querySelector(".OverlayMenu")
let searchInput = document.querySelector(".searchInput")
let searchBtn = document.querySelector(".searchBtn")

OverlayMenuBtn.addEventListener("click" , () => {
    OverlayMenu.classList.toggle("-ml-[67%]");
})

searchInput.addEventListener("keyup" , () => {
    searchInput.value  != "" ? searchBtn.classList.add("animate-bounce")  : searchBtn.classList.remove("animate-bounce")
    
})


$(document).ready(function(){
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop: true,		
		autoplay:true,
		autoplayTimeout:4000,
        margin:20,	
		dots:true,
		autoplayHoverPause:true,
		responsive: {
		  100: {
			  items: 1,
	  		  center: false,

		  },
		  700: {
			items: 2,
			  center: false,

		},
		  1024: {
			  items: 2
		  },	
	  }
	});	
  });