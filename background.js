chrome.runtime.onInstalled.addListener(details => {
    var URL = "https://github.com/RoyceAroc/ReSearch/blob/main/README.md";
    chrome.tabs.create({ url: URL });
});