import { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { username: 'Love' }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange = event => {
    this.setState({ username: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    if (this.props.onUsernameSubmitHandler) {
      this.props.onUsernameSubmitHandler(this.state.username)
    } else {
      this.props.onFriendUsernameSubmitHandler(this.state.username)
    }
  }
  render() {
    return (
      <form className="name-form" onSubmit={this.handleSubmit}>
        <p className="name-label">{this.props.title}</p>
        <input
          type="text"
          name="topic"
          className="name"
          placeholder="username"
          onChange={this.handleInputChange}
        />
        <input type="submit" value={this.props.buttonName} className="btn" />
      </form>
    )
  }
}

export default Form
