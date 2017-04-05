import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import reducers from './reducers'
import {Provider} from 'react-redux'
import App from './components/App'


//noinspection JSUnresolvedFunction, JSUnresolvedVariable
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById("root")
)
