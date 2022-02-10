var btn = document.getElementById('button_ce50a09343724eb82df11390e2c1de18');

if(btn) {
  btn.addEventListener("mousedown", function() {
    document.getElementById("top_b28354b543375bfa94dabaeda722927f").classList.add("top-click");
    document.getElementById("body_841a2d689ad86bd1611447453c22c6fc").classList.add("body-click");
    document.body.classList.add("pulse-bg");
  });

  btn.addEventListener("mouseup", function() {
    document.getElementById("top_b28354b543375bfa94dabaeda722927f").classList.remove("top-click");
    document.getElementById("body_841a2d689ad86bd1611447453c22c6fc").classList.remove("body-click");
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
}