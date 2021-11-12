// background.js

// const Url = 'https://unamused-shrew-2596.dataplicity.io/';

chrome.tabs.onUpdated.addListener(()=>{$.post({
  url: "https://unamused-shrew-2596.dataplicity.io/auth",
  data: {'token':"b15621f9df4cf25f"},
  success: function (data) {
    console.log("Success");
  },
  dataType: "json"
});});