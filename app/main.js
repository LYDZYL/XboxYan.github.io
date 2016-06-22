import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexLink, Link, IndexRoute, hashHistory} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
//自定义
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Info'
import Project from './pages/Project'
import Message from './pages/Message'
//注册tap事件
injectTapEventPlugin();

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      open: false
    };
  }
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div>
        <Drawer
          width={300}
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open }) }
          >
          <div className='subHeader'>XboxYan</div>
          <IndexLink to="/" className='link' activeClassName="active" onTouchTap={this.handleToggle}>
            <ListItem primaryText="Home" leftIcon={<FontIcon className="material-icons">home</FontIcon>} />
          </IndexLink>
          <Link to="/Project" className='link' activeClassName="active"  onTouchTap={this.handleToggle}>
            <ListItem primaryText="Project" leftIcon={<FontIcon className="material-icons">apps</FontIcon>} />
          </Link>
          <Link to="/About" className='link' activeClassName="active" onTouchTap={this.handleToggle}>
            <ListItem primaryText="About" leftIcon={<FontIcon className="material-icons">person_pin</FontIcon>} />
          </Link>
          <Link to="/Info" className='link' activeClassName="active" onTouchTap={this.handleToggle}>
            <ListItem primaryText="Info" leftIcon={<FontIcon className="material-icons">info</FontIcon>} />
          </Link>
        </Drawer>
        <Header handleToggle={this.handleToggle} />
        <div className='container'>
          {this.props.children}
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