import React from 'react'

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }

  componentDidMount() {
    // from the path `/inbox/messages/:id`
    const id = this.props.params.id

    fetchMessage(id, function (err, message) {
      this.setState({ message: message })
    })
  }
  render() {
    return (
      <div>Message{this.state.message}</div>
    )
  }
}

module.exports = Message 