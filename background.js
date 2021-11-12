// background.js

// const Url = 'https://unamused-shrew-2596.dataplicity.io/';
url = "fakeurl"

function update(url_) {
  url = url_;
}

chrome.tabs.onUpdated.addListener(()=>{
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    update(tabs[0].url);
    alert('hi');
  });
  fetch('http://localhost:9000/query',
  {
    method : 'POST',
    cache : 'no-cache',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({"domain" : url})
  }).then(function(response) {
    console.log(response);
  })
});