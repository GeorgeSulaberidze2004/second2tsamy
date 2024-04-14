setTimeout(() => {
  document.getElementById("model-y-info").style.opacity = 1;
  document.getElementById("model-y-info").style.transform = "translateY(0)";
}, 0);

setTimeout(() => {
  document.getElementById("model-y-footer").style.opacity = 1;
  document.getElementById("model-y-footer").style.transform = "translateY(0)";
}, 1000);




document.getElementById('menuBtn').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('show-sidebar');
  document.querySelector('.overlay').classList.toggle('show-overlay');
});

document.querySelector('.overlay').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.remove('show-sidebar');
  document.querySelector('.overlay').classList.remove('show-overlay');
});

document.querySelector('.closenav').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.remove('show-sidebar');
  document.querySelector('.overlay').classList.remove('show-overlay');
});






document.getElementById("menuBtn").addEventListener("click", function() {
  document.querySelectorAll(".omnichannel__overlay, .header__overlay").forEach(function(el) {
      el.classList.remove("overlay-hidden");
  });
});

document.getElementById("closeNav").addEventListener("click", function() {
  document.querySelectorAll(".omnichannel__overlay, .header__overlay").forEach(function(el) {
      el.classList.add("overlay-hidden");
  });
});







document.addEventListener('DOMContentLoaded', function () {
// Function to smoothly scroll to the next page
function smoothScrollToNextPage() {
    const nextSection = document.getElementById('model-y-info');
    // Using modern smooth scroll behavior
    nextSection.scrollIntoView({ behavior: 'smooth' });
}

// Listening for clicks on the "CHECK OUT" link
const checkOutLink = document.querySelector('.cta');
checkOutLink.addEventListener('click', function (event) {
    // Preventing default link behavior
    event.preventDefault();
    // Scroll to the next page smoothly
    smoothScrollToNextPage();
});
});





















const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
    }





    function toggleDetails() {
      var detailsSection = document.getElementById('det1');
      
      // Toggle the visibility of the details section
      if (detailsSection.style.display === 'none') {
          // Show the details section
          detailsSection.style.display = 'block';
          
          // Scroll to the details section smoothly
          detailsSection.scrollIntoView({ behavior: 'smooth' });
      } else {
          // Hide the details section if it's already visible
          detailsSection.style.display = 'none';
      }
  }

  


  
