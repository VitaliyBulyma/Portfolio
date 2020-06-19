// Adapted and modified from https://www.youtube.com/watch?v=7ZO2RTMNSAY - Image Slider with HTML, CSS, JS

 let sliderImages = document.querySelectorAll('.slide'),
 arrowLeft = document.querySelector('#arrow-left'),
 arrowRight = document.querySelector('#arrow-right'),
 begin = document.querySelector('#begin'),
 current = 0;
// Clear all images
function reset() {
 for (let i = 0; i < sliderImages.length; i++) {
     sliderImages[i].style.display = "none";
 }
}
// First function to run to display first slide
function startSlide() {
 reset();
 sliderImages[0].style.display = "block";
}
// Show previous

function slideLeft() {
 reset();
 sliderImages[current - 1].style.display = "block";
 current--;
}
// Show previous

function slideRight() {
 reset();
 sliderImages[current + 1].style.display = "block";
 current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function () {
 if (current === 0) {
     current = sliderImages.length;
 }
 slideLeft();
});
// Right arrow click
arrowRight.addEventListener('click', function () {
 if (current === sliderImages.length - 1) {
     current = -1;
 }
 slideRight();
});
// Begin Button click to start the presentation
begin.addEventListener('click', function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }

    slideRight();
   });

 // Calls function to start the slideshow
startSlide();
