import { connect } from 'react-redux'
import React from 'react'
import '../App.css';

const SignedInCheckComponent = ({userSignedIn}) => {
  if(userSignedIn) {
    return <div> Signed in!</div>
  } else {
    return <div> Signed out.</div>
  }
}

const mapStateToProps = state => {
  return {
    userSignedIn: state.userReducer.user_signed_in
  }
}

const SignedInCheck = connect(
  mapStateToProps,
  null
)(SignedInCheckComponent)

export default SignedInCheck;