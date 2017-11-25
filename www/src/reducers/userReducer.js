const userReducer = (state, action) => {
  if(state === undefined) return {user: {email: '', password: ''}, user_signed_in: false};

  switch (action.type) {
    case 'SIGN_OUT':
      return {
        ...state,
        user_signed_in: false,
        user: {email: '', password: ''}
      }
    case 'SIGN_IN':
      return {
        ...state
      }
    case 'SIGN_IN_FAIL':
      return {
        ...state,
        error_message: action.reason
      }
    case 'SIGN_UP_FAIL':
      return {
        ...state,
        error_message: action.reason
      }
    case 'SIGN_IN_SUCCESS':
      return {
        ... state,
        user_signed_in: true,
        user: {
          ...state.user,
          access_token: action.access_token,
          uid: action.uid,
          client: action.client,
          token_type: action.token_type,
        }
      }
    case 'SIGN_IN_FORM_UPDATE':
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.val
        }
      }
    case 'SIGN_UP_FORM_UPDATE':
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.val
        }
      }
    default:
      return state
    }
  }
export default userReducer;