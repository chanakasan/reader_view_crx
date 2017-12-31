function handleError() {
  const { lastError } = chrome.runtime

  if (lastError) {
    console.log("[DEBUG] lastError =", lastError)
  }
}

function activatePageAction(tabs) {
  tabs.forEach((tab) => chrome.pageAction.show(tab.id))
}

function handlePageActionClick(tab) {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  }, handleError)
}

function handleTabUpdate(tabId, changeInfo, tab) {
  chrome.pageAction.show(tabId)
}

// for tests
if (typeof exports !== 'undefined') {
  Object.assign(exports, {
    activatePageAction,
    handlePageActionClick,
    handleTabUpdate,
  })
}
