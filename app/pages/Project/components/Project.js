import { Link } from 'react-router'
class Project extends React.Component {
  render() {
    return (
      <div>
        <h1>Project!!!!!!</h1>
        {this.props.children||<Link to='Project/33'>跳转item</Link>}
      </div>
    )
  }
}

module.exports = Project 