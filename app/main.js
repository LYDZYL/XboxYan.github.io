import React from 'react'
import ReactDom from 'react-dom'

// 首先我们需要导入一些组件...
import { Router, Route, Link } from 'react-router'
import { hashHistory } from 'react-router'
// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
class App extends React.Component{
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

class About extends React.Component{
    render() {
    	return (
            <div>About</div>
        )
    }
}

class Inbox extends React.Component{
    render() {
    	return (
            <div>Inbox！</div>
        )
    }
}

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
ReactDom.render(
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
, document.getElementById('app'));