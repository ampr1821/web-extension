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
window.onload=function(){
  var reportButton = document.getElementById('button');
  reportButton.addEventListener('click', function (event) {
    fetch('http://localhost:9000/report',
    {
      method : 'POST',
      cache : 'no-cache',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({"site" : window.location.toString()})
    }).then(response => response.text())
      .then((response) => {
        alert(response);
      })
      .catch(err => console.log(err))
  });
}