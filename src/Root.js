import React from "react" 
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './login/Login.js'
import Feed from './feed/Feed.js'
import Signup from './signup/Signup.js'

function isLoggedIn() {
    return localStorage.getItem('token')
}

function getLoginComponent() {
    if (isLoggedIn()) {
        return  <Feed />
    }
    return <Login />
}

function getSignupComponent() {
    if (isLoggedIn()) {
        return  <Feed />
    }
    return <Signup />
}

export default function Root() {
            return (
            <React.StrictMode>
                        <BrowserRouter>
				    	        <Route exact path="/" component={getLoginComponent} />
                                <Route exact path="/login" component={getLoginComponent} />
                                <Route exact path="/feed" component={getLoginComponent} />
                                <Route exact path="/sign-up" component={getSignupComponent} />
                        </BrowserRouter>
            </React.StrictMode>
            )
}
 
// { isLoggedIn() ?  <Redirect to="/feed" /> : <Route path="/login" component={Login} /> }
//                              { !isLoggedIn() ? <Redirect to="/feed" /> : <Route path="/login" component={Login} /> }
// <Route exact path="/feed" component={Feed} />
// <Route exact path="/feed" component={getComponent} />
 
