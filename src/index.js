import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import registerServiceWorker from 'registerServiceWorker'

// Import context provider
import { MyProvider } from 'context'

import Main from './app/Main'

import 'index.css'
import 'grid.css'

const THEME = {
  colorBlack: 'hsla(0, 0%, 15%, 1)',
  colorRed: 'hsla(351.6, 97.2%, 42%, 1)',
  transitionDuration: '.25s',
  transitionTiming: 'ease-in-out'
}

class App extends Component {
  state = {
    language: 'en'
  }

  render() {
    return (
      <MyProvider initialState={this.state}>
        <BrowserRouter>
          <ThemeProvider theme={THEME}>
            <Main />
          </ThemeProvider>
        </BrowserRouter>
      </MyProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
