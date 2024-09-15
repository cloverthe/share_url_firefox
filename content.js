browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "copy") {
      copyToClipboard(request.url);
    }
  });
  
  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
  