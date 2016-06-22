import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Info'
import Project from './pages/Project'
import Message from './pages/Message'

class Main extends React.Component {
  render() {
    let {children} = this.props
    return (
      <div>
        <Header />
        <div className='box' style={{ border: '1px solid #ccc' }}>
          {children}
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Main {...this.props} />
      </MuiThemeProvider>
    )
  }
}

ReactDom.render(
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home}/>
      <Route path="project" component={Project}/>
      <Route path="about" component={About}/>
      <Route path="info" component={Info} >
        <IndexRoute component={Message} />
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
  , document.getElementById('app'));