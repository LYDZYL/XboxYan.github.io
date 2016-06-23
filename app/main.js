import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexLink, Link, IndexRoute, hashHistory} from 'react-router';
//自定义
import Header from './components/Header';
import Side from './components/Side';
import Home from './pages/Home';
import About from './pages/About';
import Info from './pages/Info';
import Project from './pages/Project';
import Message from './pages/Message';
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
        <Header handleToggle={this.handleToggle} />
        <Side handleToggle={this.handleToggle} open={this.state.open} />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.setState({
      loading: false
    })
  }
  render() {
    if (this.state.loading) {
      console.log('333333333')
      return (
        <div>正在加载中...</div>
      )
    }else{
      console.log('44444')
      return (
        <MuiThemeProvider>
          <Main {...this.props} />
        </MuiThemeProvider>
      )
    }

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