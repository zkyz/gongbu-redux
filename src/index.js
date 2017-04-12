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
	{
		todo: [{
			id:        -1,
			text:      'Checking',
			completed: false
		}]
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootEl = document.getElementById('root')

const myTheme = getMuiTheme({
	borderRadius: 4,
	fontFamily:   ['Noto Sans KR', 'sans-serif'],
	palette:      {
		textColor:    '#555',
		accent1Color: '#000'
	}
})

const body = (App) => (
	<Provider store={ store }>
		<MuiThemeProvider muiTheme={ myTheme }>
			{ App }
		</MuiThemeProvider>
	</Provider>
)

render(
	body(<App />),
	rootEl
)

if (module.hot) {
	module.hot.accept(
		'./components/App',
		() => {
			const NextApp = require('./components/App').default
			render(
				body(<NextApp />),
				rootEl
			)
		}
	)
}
