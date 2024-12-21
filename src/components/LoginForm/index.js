// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', warning: false, errorMsg: ''}

  submitSuccessful = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const checkNonEmptyInputs = username !== '' && password !== ''
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    if (checkNonEmptyInputs) {
      const response = await fetch(url, options)
      console.log(response)
      const data = await response.json()
      console.log(data)
      if (response.ok) {
        this.submitSuccessful()
      } else {
        this.setState({warning: true, errorMsg: data.error_msg})
      }
    } else {
      const response = await fetch(url, options)
      const data = await response.json()
      this.setState({warning: true, errorMsg: data.error_msg})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, warning, errorMsg} = this.state
    return (
      <div className="login-page">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />
        </div>
        <form onSubmit={this.onSubmitForm}>
          <div className="entry-card">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
                alt="website logo"
                className="login-logo"
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="username">
                USERNAME
              </label>
              <input
                type="text"
                className="input"
                id="username"
                placeholder="Username"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                className="input"
                id="password"
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </div>
            <div>
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>
            {warning && (
              <div>
                <p className="failed">{errorMsg}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
