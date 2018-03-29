import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker'

import Main from './app/Main'

import './index.css'
import './grid.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
