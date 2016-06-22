import React from 'react';
import { IndexLink, Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Starry from '../canvas/Starry';
require('./Header.css');

class Header extends React.Component {
  componentDidMount() {
    var cx = document.getElementById('canvas');
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
    cx.onmousemove = function (e) {
      St.mousePos[0] = e.clientX - St.cx.offsetLeft;
      St.mousePos[1] = e.clientY - St.cx.offsetTop;
    }
    window.onresize();
  }
  render() {
    return (
      <div className='header'>
        <AppBar
          iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github" />}
          style={{background:'none',position:'fixed'}}
          zDepth={0}
          onLeftIconButtonTouchTap={this.props.handleToggle}
        />
        <canvas id='canvas' style={{ width:'100%',height: '400px' }}></canvas>
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
