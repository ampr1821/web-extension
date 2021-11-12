//button.js

$("#button").mousedown(function() {
  $("#top").addClass("top-click");
  $("#body").addClass("body-click");
  $("body").addClass("pulse-bg");
});

$("#button").mouseup (function() {
  $("#top").removeClass("top-click");
  $("#body").removeClass("body-click");
  $("body").removeClass("pulse-bg");
});