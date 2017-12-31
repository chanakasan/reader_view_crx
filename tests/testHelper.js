import _ from 'lodash'

// add src imports to global
_.extend(global, require('../src/handlers'))

// create mocks for chrome.* apis
global.chrome = {
  tabs: {
    query: jest.fn(),
    onUpdated: {
      addListener: jest.fn(),
    },
  },
  pageAction: {
    onClicked: {
      addListener: jest.fn(),
    },
    show: jest.fn(),
  },
}
