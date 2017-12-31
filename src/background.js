// start

chrome.tabs.query({}, activatePageAction)

// register listeners
chrome.pageAction.onClicked.addListener(handlePageActionClick)
chrome.tabs.onUpdated.addListener(handleTabUpdate)
