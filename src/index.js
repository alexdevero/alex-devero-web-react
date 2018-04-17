import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import registerServiceWorker from 'registerServiceWorker'

// Import context provider
import { MyProvider } from 'context'

import Main from './app/Main'

import 'index.css'
import 'grid.css'

const THEME = {
  colorBlueDark: 'hsl(218.4, 24.3%, 20.2%, 1)',
  colorBlack: 'hsla(0, 0%, 15%, 1)',
  colorRed: 'hsla(351.6, 97.2%, 42%, 1)',
  transitionDuration: '.25s',
  transitionTiming: 'ease-in-out'
}

injectGlobal`
  body {
    background-color: hsla(218.4, 24.3%, 20.2%, 1);
  }

  .nav-is-open {
    overflow: hidden;

    .header {
      position: static;
    }
  }
`

const App = () => {
  return (
    <MyProvider>
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <Main />
        </ThemeProvider>
      </BrowserRouter>
    </MyProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
