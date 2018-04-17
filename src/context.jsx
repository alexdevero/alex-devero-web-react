import React, { Component } from 'react'

// Create new context
export const MyContext = React.createContext()

// Then create a provider Component
export class MyProvider extends Component {
  state = {
    isNavOpen: false,
    language: ''
  }

  changeLanguage = (e) => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
      language: e.target.dataset.language
    })

    document.body.classList.toggle('nav-is-open')
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })

    document.body.classList.toggle('nav-is-open')
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        changeLanguage: this.changeLanguage,
        toggleNav: this.toggleNav
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
