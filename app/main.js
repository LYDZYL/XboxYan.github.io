import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, hashHistory} from 'react-router';
//自定义
import Header from './components/Header';
import Side from './components/Side';

let Home = require('./pages/Home');
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

const rootRoute = {
    path: '/',
    component: App,
    indexRoute: require('./pages/Home'),
    childRoutes: [
      require('./pages/Home'),
      require('./pages/Project'),
      require('./pages/About'),
      require('./pages/Info')
    ]
}

ReactDom.render(
  <Router history={hashHistory} routes={rootRoute} />, 
  document.getElementById('app')
);