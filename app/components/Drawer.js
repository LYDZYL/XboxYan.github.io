import React from 'react';
import Drawer from 'material-ui/Drawer';
import { IndexLink, Link } from 'react-router';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }
  render() {
    return (
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
    )
  }
}
module.exports = Drawer 
