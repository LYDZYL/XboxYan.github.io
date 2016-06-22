import React from 'react';
import { IndexLink, Link } from 'react-router';
require('./Header.css');

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='layout'>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <Link to="/Project" activeClassName="active">Project</Link>
          <Link to="/About" activeClassName="active">About</Link>
          <Link to="/Info" activeClassName="active">Info</Link>
        </div>
      </div>
    )
  }
}
module.exports = Header 
