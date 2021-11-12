// // background.js

// const Url = 'https://unamused-shrew-2596.dataplicity.io/';
url = "fakeurl"
oldhost = ""

function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

function query(url, tabId) {
  hostname = extractHostname(url);
  if(hostname != oldhost) {
    fetch('http://localhost:9000/query',
    {
      method : 'POST',
      cache : 'no-cache',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({"domain" : hostname})
    }).then(function(response) {
      // response
      // chrome.tabs.update(tabId, {url:"popup.html"});
      // alert('yus');
    });
  }
  oldhost = hostname;
}

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  let queryOptions = { active: true, currentWindow: true };
  let [tabx] = await chrome.tabs.query(queryOptions);
  if (changeInfo.url)
    query(tabx.url, tabId);
});