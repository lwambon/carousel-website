let slideIndex = 1;
document.addEventListener("DOMContentLoaded", function () {
  contentContainer(slideIndex);
});

window.plusSlides = function (n) {
  contentContainer((slideIndex += n));
};

window.currentSlide = function (n) {
  contentContainer((slideIndex = n));
};

function contentContainer(n) {
  let i;
  let slides = document.getElementsByClassName("content-container");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
