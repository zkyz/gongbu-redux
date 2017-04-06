import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import reducers from './reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './index.css'

//noinspection JSUnresolvedFunction, JSUnresolvedVariable
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootEl = document.getElementById('root')

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  rootEl
)

if (module.hot) {
  module.hot.accept(
    './components/App',
    () => {
      const NextApp = require('./components/App').default
      render(
        <Provider store={ store }>
          <NextApp />
        </Provider>,
        rootEl
      )
    }
  )
}
