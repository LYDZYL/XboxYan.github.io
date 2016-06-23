import { Link } from 'react-router';

class Info extends React.Component {
  render() {
    return (
      <div><Link to="info/messages" params={{id: 55}}>Info</Link></div>
    )
  }
}

module.exports = Info 