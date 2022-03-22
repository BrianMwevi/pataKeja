$(document).ready(function () {
  // $("body").css("background-color", "cyan")
  slideFeatures();
});

// featured section slider
let slideFeatures = () => {
  $(".prev").click(function () {
    console.log("prev btn pressed");
  });$(".next").click(function () {
    console.log("next btn pressed");
  });
};
