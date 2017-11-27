import axios from 'axios'
const API_PATH = process.env.REACT_APP_API_HOST + "/auth/"

export const doSignIn = () => {
  return {
    type: 'SIGN_IN'
  }
}

export const clearError = () => {
  return {
    type: 'CLEAR_ERROR'
  }
}

export const doSignInFail = (reason) => {
  return {
    type: 'SIGN_IN_FAIL',
    reason: reason
  }
}

export const doSignInSuccess = (accessToken, tokenType, client, uid) => {
  return {
    type: 'SIGN_IN_SUCCESS',
    access_token: accessToken,
    token_type: tokenType,
    client: client,
    uid: uid
  }
}

export const doSignInFormUpdate = (name, val) => {
  return {
    type: 'SIGN_IN_FORM_UPDATE',
    name: name,
    val: val
  }
}

export const  requestSignIn = (email, password) => {
  return function (dispatch) {
    dispatch(doSignIn)
    const signInPath = API_PATH.concat('sign_in')
    axios.post(signInPath, {
      email: email,
      password: password
    }).then((response) => {
      dispatch(clearError())
      dispatch(doSignInSuccess(response.headers['access-token'], response.headers['token-type'], response.headers['client'], response.headers['uid']))
    }).catch(function (error) {
      if (error.response) {
        dispatch(doSignInFail(error.response.data.errors[0]))
      } else {
        dispatch(doSignInFail(error.message))
      }
    });
  }
}

export const doSignUpFail = (reason) => {
  return {
    type: 'SIGN_UP_FAIL',
    reason: reason
  }
}

export const requestSignUp = (email, password, passwordConfirmation) => {
  return function(dispatch) {
    dispatch(doSignUp)
    const signUpPath = API_PATH
    axios.post(signUpPath, {
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }).then((response) => {
      dispatch(clearError())
      dispatch(doSignInSuccess(response.headers['access-token'], response.headers['token-type'], response.headers['client'], response.headers['uid']))
    }).catch((error) => {
      if (error.response) {
        dispatch(doSignUpFail(error.response.data.errors.full_messages[0]))
      } else {
        dispatch(doSignUpFail(error.message))
      }
    })
  }
}

export const doSignUp = () => {
  return {
    type: 'SIGN_UP'
  }
}

export const doSignUpFormUpdate = (name, val) => {
  return {
    type: 'SIGN_UP_FORM_UPDATE',
    name: name,
    val: val
  }
}