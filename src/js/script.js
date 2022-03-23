$(document).ready(function () {
  console.log("page loaded");
  slider();
});

// featured section slider
let slider = () => {
  $(".next").click(function () {
    let currentSlide = $(".slide.active");
    let nextSlide = currentSlide.next();

    currentSlide.fadeOut(400).removeClass("active");
    nextSlide.fadeIn(400).addClass("active");

    if (nextSlide.length == 0) {
      $(".slide").first().fadeIn(300).addClass("active");
    }
  });

  $(".prev").click(function () {
    console.log("prev btn pressed");
    let currentSlide = $(".slide.active");
    let prevSlide = currentSlide.prev();

    currentSlide.fadeOut(300).removeClass("active");
    prevSlide.fadeIn(300).addClass("active");

    if (prevSlide.length == 0) {
      $(".slide").last().fadeIn(300).addClass("active");
    }
  });
};
