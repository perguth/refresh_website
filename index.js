console.log('start')
var Alt = require('alt')
var alt = new Alt()

// Actions
class RefreshPageActions {
  definePage (url, interval) {
    this.dispatch({url, interval})
  }
}
var refreshPageActions = alt.createActions(RefreshPageActions)

// Stores
class RefreshStore {
  constructor () {
    this.bindAction(refreshPageActions.definePage, this.onDefinePage)
    this.url = '#'
    this.interval = 0
  }
  onDefinePage (obj) {
    var {url, interval} = obj
    this.url = url
    this.interval = interval
  }
}
var refreshStore = alt.createStore(RefreshStore)

// Listeners
refreshStore.listen((data) => {
  console.log(data)
})

// Events
refreshPageActions.definePage('https://d3v.at', 5)
