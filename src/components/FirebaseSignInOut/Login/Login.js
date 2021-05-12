import React, { useContext, useAuth, useState } from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config/firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

if( firebase.apps.length === 0 ){
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const [user, setUser] = useState({});
    const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var user = result.user;
    const userInfo = {
        name: user.displayName,
        email: user.email
    }
    setUser(userInfo);
    setLoggedInUser(userInfo);
    history.replace(from);
  }).catch((error) => {
    console.log(error);
  });
    }

    return (
        <div className="container loginPage d-flex align-items-center justify-content-center">
           
            <button onClick={googleSignIn} className="btn google_login"> <FcGoogle className="google_logo" /> Continue with Google</button>
           
        </div>
    );
};

export default Login;