import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import GlobalStyles from './styles/GlobalStyles'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
