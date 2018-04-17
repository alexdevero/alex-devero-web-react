// Imports
import React from 'react'
// import CookieConsent from 'react-cookie-consent'

import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Lab from './pages/Lab'
import Contact from './pages/Contact'

import { MyContext } from 'context'

import Header from './components/Header'


// Component Implementation
const Main = () => {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="wrapper">
          <Header context={context} />

          <Route exact={true} path="/" component={Home}/>
          <Route path="/work" component={Work}/>
          <Route path="/about" component={About}/>
          <Route path="/lab" component={Lab}/>
          <Route path="/contact" component={Contact}/>

          {/* <FooterMenu /> */}

          {/* <CookieConsent location="bottom">
            This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies.
          </CookieConsent> */}
        </div>
      )}
    </MyContext.Consumer>
  )
}

export default Main
