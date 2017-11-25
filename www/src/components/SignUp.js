import React from 'react'
import {Redirect} from 'react-router-dom'
const SignUp = ({userSignedIn,handleFormChange, handleSubmit, email, password, passwordConfirmation, errorMessage}) => {
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
      <form onSubmit={(e) => {e.preventDefault(); handleSubmit(email, password, passwordConfirmation)}}>
        <label>
          Email
          <input name="email" onChange={(e)=>{e.preventDefault();handleFormChange('email',e.target.value )}}></input>
        </label>
        <label>
          Password
          <input name="password" type="password" onChange={(e)=>{e.preventDefault();handleFormChange('password',e.target.value )}}></input>
        </label>
        <label>
          Password confirmation
          <input name="password_confirmation" type="password" onChange={(e)=>{e.preventDefault();handleFormChange('password_confirmation',e.target.value )}}></input>
        </label>
        <button name="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp