import '../src/handlers'

describe('handlers.js', () => {
  describe('handleTabUpdate', () => {
    it('show pageAction if hidden', () => {
      handleTabUpdate(123)
      expect(chrome.pageAction.show).toBeCalledWith(123)
    })
  })
})
