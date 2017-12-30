function activatePageAction(tabs) {
  tabs.forEach((tab) => chrome.pageAction.show(tab.id))
}

function handlePageActionClick(tab) {
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  })
}

// for tests
if (typeof exports !== 'undefined') {
  Object.assign(exports, {
    activatePageAction,
    handlePageActionClick,
  })
}
