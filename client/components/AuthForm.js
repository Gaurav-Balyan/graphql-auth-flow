import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className='row'>
        <form className='col s6' onSubmit={this.onSubmit.bind(this)}>
          <div className='input-field'>
            <input
              placeholder='email'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className='input-field'>
            <input
              placeholder='password'
              type='password'
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div className='errors'>
            {this.props.errors.map((error) => (
              <div key={error}>{error}</div>
            ))}
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
