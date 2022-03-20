chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  console.log(tabs[0].url);
  let content = document.getElementById("url").innerHTML;
  document.getElementById("url").innerHTML = content + tabs[0].url;
});

