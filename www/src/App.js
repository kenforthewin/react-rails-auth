import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux'
import ReactLoading from 'react-loading';
import SignedInCheck from './components/SignedInCheck';
import VisibleSignIn from './containers/VisibleSignIn';
import SignOut from './containers/SignOut';
import VisibleSignUp from './containers/VisibleSignUp';
import './App.css';
import {history} from './index'
import {ConnectedRouter} from 'react-router-redux'
const userRoutes = userSignedIn => {
  if(userSignedIn)
    return<li><Link to="/logout">Sign out</Link></li>
  else
    return [
      <li key="login" ><Link to="/login">Sign in</Link></li>,
      <li key="register" ><Link to="/register">Sign up</Link></li>
    ]
}


const mainApp = ({userSignedIn}) => {
  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          {userRoutes(userSignedIn)}
        </ul>
        <Route exact path="/" component={SignedInCheck}/>
        <Route path="/login" component={VisibleSignIn}/>
        <Route path="/logout" component={SignOut}/>
        <Route path="/register" component={VisibleSignUp}/>
      </div>
    </ConnectedRouter>
  )
}

const mapStateToProps = state => {
  return {
    userSignedIn: state.userReducer.user_signed_in
  }
}

const App = connect(
  mapStateToProps,
  {}
)(mainApp)

export default App;
