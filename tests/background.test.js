import '../src/background'

describe('background.js', () => {
  it('activates pageAction for all tabs', () => {
    expect(chrome.tabs.query).toBeCalledWith({}, activatePageAction)
  })

  it('listens for pageAction.onClicked', () => {
    expect(chrome.pageAction.onClicked.addListener).toBeCalledWith(handlePageActionClick)
  })
})
