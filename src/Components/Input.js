import { Component } from 'react'
import '../Stylesheets/style.css'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }
    this.messageInputHandler = this.messageInputHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  messageInputHandler(event) {
    this.setState({ message: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.sendMessageHandler(this.state.message)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="type-message-box">
          <div className="typeMessage">
            <input
              type="text"
              placeholder="Type a Message Here"
              name="message"
              onChange={this.messageInputHandler}
            />
          </div>
          <input type="submit" value="Send" className="sendButton" />
          {/* <i className="icon-user"></i>
        </div> */}
        </div>
      </form>
    )
  }
}
export default Input
