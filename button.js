var btn = document.getElementById('button');

btn.addEventListener("mousedown", function() {
  document.getElementById("top").classList.add("top-click");
  document.getElementById("body").classList.add("body-click");
  document.body.classList.add("pulse-bg");
});

btn.addEventListener("mouseup", function() {
  document.getElementById("top").classList.remove("top-click");
  document.getElementById("body").classList.remove("body-click");
  document.body.classList.remove("pulse-bg");
});

window.onload=function(){
  // var reportButton = document.getElementById('button');
  btn.addEventListener('click', function (event) {
    fetch('https://unamused-shrew-2596.dataplicity.io/report',
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