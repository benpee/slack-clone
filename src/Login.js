import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = e => {
        auth.signInWithProvider(provider)
            .then(result => dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            }))
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.mos.futurecdn.net/SDDw7" alt="Slack logo" />
                <h1>Sign in to Anter HQ</h1>
                <p>anthertech.slack.com</p>
                <Button onClick={signIn}>Sigin with Google</Button>
            </div>
        </div>
    )
}

export default Login
