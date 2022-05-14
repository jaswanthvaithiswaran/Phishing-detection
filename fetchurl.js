chrome.storage.local.get(['key'], function(result) {
    console.log('pred is  read in frontend ' + result.key);
    var res = Math.floor(result.key*100);
    let content = document.getElementById("pred").innerHTML;
    if(res>80){
      document.getElementById("logo").style.backgroundColor = "green";
      document.getElementById("logocontent").innerHTML = "Safe";
    }
    else{
      document.getElementById("logo").style.backgroundColor = "red";
      document.getElementById("logocontent").innerHTML = "Unsafe";
    }
    document.getElementById("pred").innerHTML = content +"<span style='color:white'>" + res + "</span>";
  });


  chrome.storage.local.get(['urls'], function(result) {
    console.log('url is  read in frontend ' + result.urls);
    let content = document.getElementById("url").innerHTML;
    document.getElementById("url").innerHTML = content + result.urls;
  });


