import { Component } from 'react'
import Message from './Message'
import Input from './Input'
import '../Stylesheets/style.css'

import mqtt from 'mqtt'
const client = mqtt.connect('mqtt://localhost:8888')

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: [],
    }

    client.subscribe(this.props.username)
  }
  componentDidMount() {
    client.on('message', (topic, message) => {
      console.log('I a here....on message event', topic, message.toString())
      const messageBody = {
        content: message.toString(),
        username: this.props.friendName,
        fromMe: false,
      }
      const messageArray = this.state.message.concat(messageBody)
      this.setState({ message: messageArray })
    })
  }
  sendMessageHandler(message) {
    client.publish(this.props.friendName, message)
    const messageBody = {
      content: message,
      username: this.props.username,
      fromMe: true,
    }
    const messageArray = this.state.message.concat(messageBody)
    this.setState({ message: messageArray })
  }
  render() {
    const messages = this.state.message.map((item, index) => {
      return (
        <Message
          message={item.content}
          key={index}
          username={item.username}
          fromMe={item.fromMe}
        />
      )
    })
    return (
      <>
        <div className="chat-screen">
          <p className="heading">
            You are Chatting With {this.props.friendName}
          </p>
          {messages}
        </div>
        <Input
          sendMessageHandler={message => this.sendMessageHandler(message)}
        />
      </>
    )
  }
}
export default Chat
