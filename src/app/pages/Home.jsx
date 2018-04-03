import React, { Component } from 'react'

// Import context and provider
import { MyContext } from 'context'

// Import translations
import * as translationCZ from 'translations/cz'
import * as translationEN from 'translations/en'

import './Home.css'

import { H1, H2, H3 } from 'app/atoms/Typography'

class Home extends Component {
  state = {
    lang: this.context.language
  }
  render() {
    return (
      <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <div className="home">
                <div className="home-header">
                  <H1>{context.state.language === 'en' ? translationEN.home.h1 : translationCZ.home.h1}</H1>

                  <H2>{context.state.language === 'en' ? translationEN.home.h2 : translationCZ.home.h2}</H2>

                  <H3>{context.state.language === 'en' ? translationEN.home.h3 : translationCZ.home.h3}</H3>
                </div>
              </div>
            </React.Fragment>
          )}
      </MyContext.Consumer>
    )
  }
}

export default Home
