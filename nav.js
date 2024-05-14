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






































initializeSlider('.custom-slide', '.custom-dot', '.custom-prev', '.custom-next');

initializeSlider('.custom2-slide', '.custom2-dot', '.custom2-prev', '.custom2-next');

initializeSlider('.custom3-slide', '.custom3-dot', '.custom3-prev', '.custom3-next');

initializeSlider('.custom4-slide', '.custom4-dot', '.custom4-prev', '.custom4-next');

initializeSlider('.custom5-slide', '.custom5-dot', '.custom5-prev', '.custom5-next');





function initializeSlider(slideClass, dotClass, prevBtnClass, nextBtnClass) {
  const slides = document.querySelectorAll(slideClass);
  const dots = document.querySelectorAll(dotClass);
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
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(' active', '');
      }
      if (n > slides.length) {
          counter = 1;
      }
      if (n < 1) {
          counter = slides.length;
      }
      slides[counter - 1].style.display = "block";
      dots[counter - 1].className += " active";
  }

  // Event listeners for prev and next buttons
  document.querySelector(prevBtnClass).addEventListener('click', () => {
      plusSlides(-1);
  });

  document.querySelector(nextBtnClass).addEventListener('click', () => {
      plusSlides(1);
  });

  // Event listeners for dots
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          currentSlide(index + 1);
      });
  });
}

// Call the function with your specific class names
initializeSlider('.myslide', '.dot', '.prev', '.next');





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

  


  
