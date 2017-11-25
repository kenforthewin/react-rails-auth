import SignUp from '../components/SignUp'
import {requestSignUp, doSignUpFormUpdate} from '../actions/signIn'
import {connect} from 'react-redux'
const mapDispatchToProps = dispatch => {
  return {
    handleSubmit : (email, password, confirmation) => {dispatch(requestSignUp(email, password, confirmation)) },
    handleFormChange: (name, val) => {dispatch(doSignUpFormUpdate(name, val))}
  }
}

const mapStateToProps = state => {
  return {
    userSignedIn: state.userReducer.user_signed_in,
    email: state.userReducer.user.email,
    password: state.userReducer.user.password,
    passwordConfirmation: state.userReducer.user.password_confirmation,
    errorMessage: state.userReducer.error_message

  }
}

const VisibleSignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)

export default VisibleSignUp