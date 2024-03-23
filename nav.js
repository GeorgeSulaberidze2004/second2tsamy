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











