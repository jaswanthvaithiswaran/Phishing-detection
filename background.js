let tabid=0;
console.log("its runnung")
chrome.tabs.onActivated.addListener((activeInfo) => {  
  console.log("Active tab changed--------------->")
  dostuff();
})


chrome.tabs.onUpdated.addListener((activeInfo) => {  
  console.log("tab updated------------->")
  dostuff();
})

/*chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  tabid = tabs[0];
  console.log("tabs getting qureied")
  dostuff(tabs[0]);
  let content = document.getElementById("url").innerHTML;
  document.getElementById("url").innerHTML = content + tabs[0].url;
});*/

function dostuff(tabs){
  console.log("Event Started------------->")
  let url = " ";
  getCurrentTab().then(res => call(res.url))
}


async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
/*async function getCurrentTabUrl () {
  const tabs = await chrome.tabs.query({ active: true })
  console.log(tabs[0].url)
  return tabs[0].url
}*/




// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete' && tab.active) {

//     console.log("still runnuing");
//     getCurrentTab()
//     chrome.runtime.onMessage.addListener(gotMessage);
//   }
// })

// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   let tab = await chrome.tabs.query(queryOptions);
//   console.log(tab);
// }

// function gotMessage(message,sender,sendResponse){
//   console.log(sender.tab.url);
//   call(sender.tab.url);
//   tabid = sender.tab.id;
// }


async function call(url){
  console.log(url);
   let formData = new FormData();
    formData.append('url', url);
    const response = await fetch("https://phish-dect.herokuapp.com/call", {
    method: 'POST',
    headers: {
        'Accept': 'application/json'
    },
    body:formData 
     });
    let op = "";
    console.log("api is called-------------->");
    response.json().then(data => {
      console.log("<---------api sent response");
      op = data.pred;
      console.log(op);
      chrome.storage.local.set({urls: url}, function() {
        console.log('URL is set to ' + url);
      });

      chrome.storage.local.set({key: op}, function() {
        console.log('Pred Value is set to ' + op);
      });

      console.log("<-----------End of event")
     });
       }
