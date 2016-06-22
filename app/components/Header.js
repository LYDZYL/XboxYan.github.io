import React from 'react';
import { IndexLink, Link } from 'react-router';
import Starry from '../canvas/Starry';
require('./Header.css');

class Header extends React.Component {
  componentDidMount() {
    var cx = document.getElementById('canvas');
    console.log(new Starry())
    var ctx = cx.getContext('2d');
    var St = new Starry(cx,ctx);
    St.step();

    window.onresize = function () {
      St.cx.width = St.cx.clientWidth;
      St.cx.height = St.cx.clientHeight;

      if (St.dots.length == 0) {
        St.construct();
      }

      St.render();
    };
    window.onmousemove = function (e) {
      St.mousePos[0] = e.clientX - St.cx.offsetLeft;
      St.mousePos[1] = e.clientY - St.cx.offsetTop;
    }
    window.onresize();
  }
  render() {
    return (
      <div className='header'>
        <div id='canvas' style={{ height: '400px', background: '#2f62f7' }}></div>
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
