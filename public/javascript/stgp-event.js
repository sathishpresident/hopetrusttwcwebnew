document.addEventListener("DOMContentLoaded", function () {
    const slideshows = document.querySelectorAll('.flat-row .row .left-slideshow-box,.right-slideshow-box');

    slideshows.forEach((slideshow) => {
      const slides = slideshow.querySelectorAll('.flat-row .row .event-section .slide');
      let index = 0;

      if (slides.length <= 1) return; // Skip if only 1 slide

      setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
      }, 3000); // Change slide every 3 seconds
    });
  });
