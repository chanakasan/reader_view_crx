// start
chrome.tabs.query({}, activatePageAction)
chrome.pageAction.onClicked.addListener(handlePageActionClick)
