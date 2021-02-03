import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const {logInfo} = useContext(UserContext);
    const [loggedInUser , setLoggedInUser ] = logInfo;
  
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
   
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                // sessionStorage.setItem('info', JSON.stringify(signedInUser.email));
                history.replace(from);
                
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage, errorCode);
            });
    }

    // const setInfo = () => {
    //     sessionStorage.setItem(signedInUser);
    // }

    return (

        <div className="loginboxlayout">
            <img src="https://1.bp.blogspot.com/-gKqA42FtA48/YABSs2BtewI/AAAAAAAAQAA/l5LBFoA-ECQbI8LLU0oIl75sgaVLduBUwCLcBGAsYHQ/s200/avatar.png" className="avenger" />
            <h1>Login Here</h1>
            <form action="">
                <p>Username</p>
                <input type="text" name="username" placeholder="Enter Username" />
                <p>Password</p>
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit" name="submit" value="Login" />
            </form>
            <div className="google-login">
                <button onClick={handleGoogleSignIn}><img className="g-icon" src="https://i.imgur.com/Sx1nRKu.png" alt="icon" />Login With Google</button>
                <p className="create-account">Didnt have an account ? <span>create account</span></p>
            </div>
        </div>

    );
};

export default Login;