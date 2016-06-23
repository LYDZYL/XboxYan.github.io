class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }

  componentDidMount() {
    // from the path `/inbox/messages/:id`

    /*fetchMessage(id, function (err, message) {
      this.setState({ message: message })
    })*/
  }
  render() {
    return (
      <div>Message{this.props.params.id}</div>
    )
  }
}

module.exports = Message 