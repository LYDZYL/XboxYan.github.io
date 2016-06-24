import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

class Header extends React.Component {

  render() {
    return (
      <AppBar
          iconElementRight={<IconButton iconClassName="muidocs-icon-custom-github" linkButton={true} target='_blank' href='https://github.com/XboxYan/XboxYan.github.io' />}
          style={{background:'none',position:'fixed'}}
          zDepth={0}
          onLeftIconButtonTouchTap={this.props.handleToggle}
        />
    )
  }
}
module.exports = Header 
