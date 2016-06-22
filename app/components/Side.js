import React from 'react';
import Drawer from 'material-ui/Drawer';
import { IndexLink, Link } from 'react-router';
import { ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

class Side extends React.Component {
  render() {
    return (
      <Drawer
          width={300}
          docked={false}
          open={this.props.open}
          onRequestChange={(open) => this.props.handleToggle(open) }
          >
          <div className='subHeader'>XboxYan</div>
          <IndexLink to="/" className='link' activeClassName="active" onTouchTap={this.props.handleToggle}>
            <ListItem primaryText="Home" leftIcon={<FontIcon className="material-icons">home</FontIcon>} />
          </IndexLink>
          <Link to="/Project" className='link' activeClassName="active"  onTouchTap={this.props.handleToggle}>
            <ListItem primaryText="Project" leftIcon={<FontIcon className="material-icons">apps</FontIcon>} />
          </Link>
          <Link to="/About" className='link' activeClassName="active" onTouchTap={this.props.handleToggle}>
            <ListItem primaryText="About" leftIcon={<FontIcon className="material-icons">person_pin</FontIcon>} />
          </Link>
          <Link to="/Info" className='link' activeClassName="active" onTouchTap={this.props.handleToggle}>
            <ListItem primaryText="Info" leftIcon={<FontIcon className="material-icons">info</FontIcon>} />
          </Link>
        </Drawer>
    )
  }
}
module.exports = Side 
