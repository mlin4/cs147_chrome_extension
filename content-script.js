var iframe = document.createElement('iframe'); 
iframe.style.height = "500px";
iframe.style.width = "500px";
iframe.style.position = "fixed";
iframe.style.top = "125px";
iframe.style.right = "0px";
iframe.frameBorder = "none"; 
iframe.src = chrome.runtime.getURL("popup.html");

document.body.appendChild(iframe);