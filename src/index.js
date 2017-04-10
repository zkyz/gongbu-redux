import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import reducers from './reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './index.css'
import {MuiThemeProvider} from 'material-ui'
import {getMuiTheme} from 'material-ui/styles/index'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

//noinspection JSUnresolvedFunction, JSUnresolvedVariable
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootEl = document.getElementById('root')

const myTheme = getMuiTheme({
  borderRadius: 4
})

render(
  <Provider store={ store }>
    <MuiThemeProvider muiTheme={ myTheme }>
      <App />
    </MuiThemeProvider>
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
          <MuiThemeProvider muiTheme={ myTheme }>
            <NextApp />
          </MuiThemeProvider>
        </Provider>,
        rootEl
      )
    }
  )
}
