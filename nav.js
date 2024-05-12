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



























document.addEventListener('DOMContentLoaded', function() {
  // Polyfill for smooth scrolling
  if (!('scrollBehavior' in document.documentElement.style)) {
    // Smooth scrolling polyfill
    // You can use a library like smoothscroll-polyfill or write your own polyfill
    // Example: smoothscroll-polyfill.min.js
    // Include it in your HTML before this script
    // <script src="smoothscroll-polyfill.min.js"></script>
    // smoothscroll.polyfill();
  }

  // Function to scroll to a specific element
  function scrollToElement(elementId) {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Event listeners for navigation links
  document.getElementById('prodLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#custom-slider');
  });

  document.getElementById('aboutLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#aboutus');
  });

  document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#contact1id');
  });

  // Event listeners for sidebar links
  document.getElementById('prodSidebarLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#custom-slider');
  });

  document.getElementById('aboutSidebarLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#aboutus');
  });

  document.getElementById('contactSidebarLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#contact1id');
  });

  // Event listeners for other links
  document.getElementById('checkoutbtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#custom-slider');
  });

  document.getElementById('seedet1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#custom-slider');
  });

  document.getElementById('seedet2').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#sunstop');
  });

  document.getElementById('seedet3').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#custom2-slider');
  });

  document.getElementById('seedet4').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#solflare');
  });

  document.getElementById('seedet5').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#custom3-slider');
  });

  document.getElementById('seedet6').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#rayframe');
  });

  document.getElementById('seedet7').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#custom4-slider');
  });

  document.getElementById('seedet8').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#eyebeam');
  });

  document.getElementById('seedet9').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#custom5-slider');
  });

  document.getElementById('seedet10').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#lastpics');
  });

  document.getElementById('brandinfo').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#aboutus');
  });

  document.getElementById('aboutcontct').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToElement('#contact1id');
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

  


  
