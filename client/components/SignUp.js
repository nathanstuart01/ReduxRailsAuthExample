import React from 'react';
import { Link } from 'react-router';
import { handleSignUp } from '../actions/auth';
import { connect } from 'react-redux';

class SignUp extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    //instead of ajax call dispatch action to make ajax call, this is where normally ajax call would be made
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    this.props.dispatch(handleSignUp(email, password));
  }
    render(){
      return (

  <div className='container'>
    <h3>Sign Up</h3>
      <form onSubmit= { this.handleSubmit }>
        <input ref='email' type='text' required placeholder='Email' />
        <br />
        <input ref='password' type='password' required placeholder='Password' />
        <br />
        <input type='submit' className='btn' />
        <Link to='/login' className='btn'>Cancel</Link>
      </form>
  </div>
    );
  }
}

export default connect()(SignUp);
