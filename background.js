browser.contextMenus.create({
    id: "copy-link",
    title: "🔗 Share url",
    contexts: ["all"]
  });
  
  browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "copy-link") {
      browser.tabs.sendMessage(tab.id, { action: "copy", url: tab.url });
    }
  });
  