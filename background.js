// background.js

// const Url = 'https://unamused-shrew-2596.dataplicity.io/';

chrome.tabs.onUpdated.addListener(()=>{
  fetch('http://localhost:9000/query',
  {
    method : 'POST',
    cache : 'no-cache',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({"token" : "b15621f9df4cf25f"})
  }).then(function(response) {
    console.log(response);
  })
});