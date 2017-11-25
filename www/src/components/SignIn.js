import React from 'react';
import '../App.css';
import {Redirect} from 'react-router-dom'

const SignIn = ({ handleSubmit, handleFormChange, email, password, userSignedIn, errorMessage }) => {
  if(userSignedIn) {
    return<Redirect to="/" push />
  }

  const handleError = (errorMessage) => {
    if(errorMessage) {
      return <div>{errorMessage}</div>
    }
  }


  return (
    <div>
      {handleError(errorMessage)}
      <div>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(email, password)} }>
          <label>
            Email
            <input type="text" name="email" value={email} onChange={(e) => {handleFormChange('email', e.target.value) }}></input>
          </label>
          <label>
            Password
            <input type="password" name="password" value={password} onChange={(e) => {handleFormChange('password', e.target.value) }}></input>
          </label>
          <button type="Submit">Sign in</button>
        </form>
      </div>
    </div>
  )
}


export default SignIn;