import { connect } from 'react-redux'
import SignIn from '../components/SignIn'
import {requestSignIn, doSignInFormUpdate} from '../actions/signIn'
const mapStateToProps = state => {
  return {
    email: state.userReducer.user.email,
    password: state.userReducer.user.password,
    userSignedIn: state.userReducer.user_signed_in,
    errorMessage: state.userReducer.error_message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit : (email, password) => dispatch(requestSignIn(email, password)),
    handleFormChange: (name, val) => dispatch(doSignInFormUpdate(name, val))
  }
}

const VisibleSignIn = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)

export default VisibleSignIn