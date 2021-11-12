// background.js

// const Url = 'https://unamused-shrew-2596.dataplicity.io/';
url = "fakeurl"

function query(url, tabId) {
  fetch('http://localhost:9000/query',
  {
    method : 'POST',
    cache : 'no-cache',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({"domain" : url})
  }).then(function(response) {
    // response
    // chrome.tabs.update(tabId, {url:"popup.html"});
    console.log('yus');
  });
}

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  let queryOptions = { active: true, currentWindow: true };
  let [tabx] = await chrome.tabs.query(queryOptions);
  if (changeInfo.url)
    query(tabx.url, tabId);
});