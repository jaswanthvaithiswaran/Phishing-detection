let currentURL = window.location.href;
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});

chrome.runtime.onMessage.addListener(gotmsg);

function gotmsg(request,sender,sendResponse){
  console.log(request.pred)
}