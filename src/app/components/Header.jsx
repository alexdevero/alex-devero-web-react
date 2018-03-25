import React, { Component } from 'react'

class Header extends Component {
  state = {
    isNavOpen: false
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })

    document.body.classList.toggle('nav-is-open')
  }

  render() {
    const navStyle = {
      display: this.state.isNavOpen && `flex`,
      visibility: this.state.isNavOpen && `visible`
    }

    return (
      <header key="header$_1" className="header">
        <div className="container-fluid">
          <div className="nav-wrapper">
            <a className="nav-brand" href="/">
              <img className="nav-brand__logo" src="./assets/images/supernova-logo-white.svg" alt="Alex Devero" />
            </a>

            <nav className="js-nav nav" style={navStyle}>
              <ul className="nav__list">
                <li><span className="nav-closer" onClick={() => this.toggleNav()}>&times;</span></li>
                <li><a className='nav-link' href="/work">Work</a></li>
                <li><a className='nav-link' href="/about">About</a></li>
                <li><a className='nav-link' href="/lab">Lab</a></li>
                <li><a className='nav-link' href="/contact">Contact</a></li>
                <li><a className="nav-link" href="http://blog.alexdevero.com/">Blog</a></li>
                <li><a className="nav-link" href="https://creativemarket.com/alexdevero">Store</a></li>
                <li><a className="nav-link" href="">CZ</a></li>
              </ul>
            </nav>

            <button className="nav-opener" type="button" aria-label="Toggle navigation" onClick={() => this.toggleNav()}>
              <span />
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
