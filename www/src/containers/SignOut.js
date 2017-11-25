import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import React from 'react'
const signOut = ({peaceOut}) => {
  peaceOut()
  return<Redirect to="/" push/>
}

const mapDispatchToProps = dispatch => {
  return {
    peaceOut: () => {dispatch({type: 'SIGN_OUT'})}
  }
}

const SignOut = connect(
  null,mapDispatchToProps
)(signOut)

export default SignOut