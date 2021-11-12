// background.js

// const Url = 'https://unamused-shrew-2596.dataplicity.io/';

chrome.tabs.onUpdated.addListener(()=>{
  fetch('https://unamused-shrew-2596.dataplicity.io/query',
  {
    method : 'POST',
    mode : 'no-cors',
    cache : 'no-cache',
    headers : {'Content-Type' : 'application/json'},
    json : {"token" : "b15621f9df4cf25f"}
  }).then(function(response) {
    console.log(response);
  })
});