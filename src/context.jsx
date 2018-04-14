import React, { Component } from 'react'

// Create new context
export const MyContext = React.createContext()

// Then create a provider Component
export class MyProvider extends Component {
  state = {
    // ...this.props.initialState,
    // setGlobalState: this.setState.bind(this)
    language: 'en',
    isNavOpen: false
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        changeLanguage: (lang) => this.setState({
          language: lang
        }),
        toggleNav: () => {
          this.setState({
            isNavOpen: !this.state.isNavOpen
          })

          document.body.classList.toggle('nav-is-open')
        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
