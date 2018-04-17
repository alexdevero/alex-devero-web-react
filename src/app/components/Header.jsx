import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

class Header extends Component {
  render() {
    const navStyle = {
      display: this.props.context.state.isNavOpen && `flex`,
      visibility: this.props.context.state.isNavOpen && `visible`
    }

    return (
      <header className="header">
        <div className="container-fluid">
          <div className="nav-wrapper">
            <a className="nav-brand" href="/">DEVERO</a>

            {this.props.context.state.isNavOpen && <nav className="js-nav nav" style={navStyle}>
              <ul className="nav__list">
                <li>
                  <Link className='nav-link' to="/" onClick={this.props.context.toggleNav}>Home</Link>
                </li>

                <li>
                  <Link className='nav-link' to="/work" onClick={this.props.context.toggleNav}>Work</Link>
                </li>

                <li>
                  <Link className='nav-link' to="/about" onClick={this.props.context.toggleNav}>About</Link>
                </li>

                <li>
                  <Link className='nav-link' to="/lab" onClick={this.props.context.toggleNav}>Lab</Link>
                </li>

                <li>
                  <Link className='nav-link' to="/contact" onClick={this.props.context.toggleNav}>Contact</Link>
                </li>

                <li>
                  <a className="nav-link" href="http://blog.alexdevero.com/">Blog</a>
                </li>

                <li>
                  <a className="nav-link" href="https://creativemarket.com/alexdevero">Store</a>
                </li>

                <li className="languages-wrapper">
                  <a
                    className="nav-link"
                    data-language="en"
                    onClick={this.props.context.changeLanguage}
                  >
                    EN
                  </a>

                  <a
                    className="nav-link"
                    data-language="de"
                    onClick={this.props.context.changeLanguage}
                  >
                    DE
                  </a>

                  <a
                    className="nav-link"
                    data-language="fr"
                    onClick={this.props.context.changeLanguage}
                  >
                    FR
                  </a>

                  <a
                    className="nav-link"
                    data-language="cz"
                    onClick={this.props.context.changeLanguage}
                  >
                    CZ
                  </a>
                </li>
              </ul>
            </nav>}

            <button className={this.props.context.state.isNavOpen ? 'nav-toggler nav-toggler--open' : 'nav-toggler'} type="button" aria-label="Toggle navigation" onClick={this.props.context.toggleNav}>
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
