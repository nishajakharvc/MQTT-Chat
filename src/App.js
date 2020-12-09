import React from 'react'
import './Stylesheets/App.css'
import Animator from './Components/Animator'
import Form from './Components/Form'
import Header from './Components/Header'
import Chat from './Components/Chat'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { usernameSubmitted: false, username: '', friendName: '' }
    this.onFriendUsernameSubmitHandler = this.onFriendUsernameSubmitHandler.bind(
      this
    )
    this.onUsernameSubmitHandler = this.onUsernameSubmitHandler.bind(this)
  }

  onFriendUsernameSubmitHandler = username => {
    this.setState({ friendName: username })
  }

  onUsernameSubmitHandler(username) {
    this.setState({ usernameSubmitted: true, username: username })
  }
  render() {
    if (this.state.usernameSubmitted) {
      if (this.state.friendName) {
        return (
          <div className="background">
            <Header username={this.state.username} />
            <Chat
              username={this.state.username}
              friendName={this.state.friendName}
            />
          </div>
        )
      } else {
        return (
          <div className="background">
            <Header username={this.state.username} />
            <p className="welcome-label">Welcome {this.state.username} !!</p>
            <Form
              title="Enter Your Friend's Username"
              buttonName="Start Messaging"
              onFriendUsernameSubmitHandler={username =>
                this.onFriendUsernameSubmitHandler(username)
              }
            />
            }
          </div>
        )
      }
    } else {
      return (
        <div className="background">
          <Header />
          <Animator />
          <Form
            title="Enter Your Username"
            buttonName="Get Started"
            onUsernameSubmitHandler={username =>
              this.onUsernameSubmitHandler(username)
            }
          />
        </div>
      )
    }
  }
}
export default App
