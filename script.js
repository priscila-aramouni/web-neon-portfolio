//Toggle navigation bar for mobile
var mainNav = document.getElementById('main-nav');
var hamburgerIcon = document.getElementById('hamburger');

hamburgerIcon.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

//Retrieve width from div and apply to span text
function updatePercentages () {
	var progressBars = document.getElementsByClassName('progress-bar');
	var spans = document.getElementsByClassName('skill-percentage');
	var barWidth = [];

	var arrayLength = progressBars.length;
	for (bar of progressBars) {
	    var pct = bar.style.width;
	    barWidth.push(pct);
	}


	var arrayLength = spans.length;
	for (var i = 0; i < arrayLength; i++) {
	    spans[i].innerHTML = barWidth[i];
	}
}

updatePercentages();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 



