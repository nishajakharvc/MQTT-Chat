import { Component } from 'react'
import '../Stylesheets/style.css'

class Message extends Component {
  render() {
    if (this.props.fromMe) {
      return (
        <>
          <div className="messageRight">
            <p className="chat-username">{this.props.username}</p>
          </div>
          <div className="messageRight">
            <p className="fromMe"> {this.props.message}</p>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="messageLeft">
            <p className="chat-username">{this.props.username}</p>
          </div>
          <div className="messageLeft">
            <p className="fromFriend"> {this.props.message}</p>
          </div>
        </>
      )
    }
  }
}
export default Message
