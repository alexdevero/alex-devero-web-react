import React, { Component } from 'react'

// Create new context
export const MyContext = React.createContext()

// Then create a provider Component
export class MyProvider extends Component {
  state = {
    ...this.props.initialState,
    setGlobalState: this.setState.bind(this)
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
