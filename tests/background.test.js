import '../src/background'

describe('background.js', () => {
  it('activates pageAction for all tabs', () => {
    expect(chrome.tabs.query).toBeCalledWith({}, activatePageAction)
  })

  it('listens for pageAction.onClicked', () => {
    expect(chrome.pageAction.onClicked.addListener).toBeCalledWith(handlePageActionClick)
  })

  it('listens for tabs.onUpdated', () => {
    expect(chrome.tabs.onUpdated.addListener).toBeCalledWith(handleTabUpdate)
  })
})
