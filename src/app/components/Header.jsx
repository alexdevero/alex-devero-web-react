import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

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
      <header className="header">
        <div className="container-fluid">
          <div className="nav-wrapper">
            <a className="nav-brand" href="/">DEVERO</a>

            {this.state.isNavOpen && <nav className="js-nav nav" style={navStyle}>
              <ul className="nav__list">
                <li><span className="nav-closer" onClick={() => this.toggleNav()}>&times;</span></li>
                <li><Link className='nav-link' to="/work">Work</Link></li>
                <li><Link className='nav-link' to="/about">About</Link></li>
                <li><Link className='nav-link' to="/lab">Lab</Link></li>
                <li><Link className='nav-link' to="/contact">Contact</Link></li>
                <li><a className="nav-link" href="http://blog.alexdevero.com/">Blog</a></li>
                <li><a className="nav-link" href="https://creativemarket.com/alexdevero">Store</a></li>
                <li><Link className="nav-link" to="/">CZ</Link></li>
              </ul>
            </nav>}

            <button className={this.state.isNavOpen ? 'nav-toggler nav-toggler--open' : 'nav-toggler'} type="button" aria-label="Toggle navigation" onClick={() => this.toggleNav()}>
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
