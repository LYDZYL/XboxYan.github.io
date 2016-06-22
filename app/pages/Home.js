import React from 'react';
import Starry from '../canvas/Starry';

class Home extends React.Component {
  componentDidMount() {
    var cx = document.getElementById('canvas');
    var ctx = cx.getContext('2d');
    var St = new Starry(cx, ctx);
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
      <div className='home'>
        <div className='canvasbg'>
            <canvas id='canvas'></canvas>
            <div className ='head'>
              <span>
                <img src='img/xboxyan.jpg' />
              </span>
              <h2>XboxYan</h2>
            </div>
        </div>
      </div>
    )
  }
}

module.exports = Home 