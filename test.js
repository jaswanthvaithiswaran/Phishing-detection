chrome.storage.local.get(['key'], function(result) {
  console.log('pred is  read in frontend script' + result.key);
  var res = Math.floor(result.key*100);
  if(res<80){
      alert("This Might be Unsafe Site")
  }
});


chrome.storage.local.get(['urls'], function(result) {
  console.log('url is  read in frontend script' + result.urls);
});