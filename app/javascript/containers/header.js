import React from 'react';
import { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export class Header extends Component {
  render() {
    return (
      <nav id="header" className="navbar navbar-light navbar-fixed-top bg-faded">
        <div className="container">
          <Link to="/" className="navbar-brand">React on Rails</Link>
          <ul className="nav navbar-nav main-nav">
            <li className="nav-item"><IndexLink className="nav-link" activeClassName="active" to="/">Home</IndexLink></li>
            <li className="nav-item"><Link className="nav-link" activeClassName="active" to="/topics/recent">Recent</Link></li>
          </ul>
          <ul className="nav navbar-nav float-xs-right">
            <li className="nav-item"><Link className="nav-link" to="/sign_up">Sign Up</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}