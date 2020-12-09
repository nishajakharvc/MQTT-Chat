import { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="header">
        <div className="logo">
          <p> MQTT Demo</p>
        </div>
        <div className="username">
          <i className="icon-user"></i>{' '}
          {this.props.username ? this.props.username : 'New User'}
        </div>
      </div>
    )
  }
}
export default Header
