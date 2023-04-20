import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { GoogleAuth } from 'google-auth-library';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();

  const googleAuth = new GoogleAuth({
    clientId: 'YOUR_CLIENT_ID',
    scope: 'profile email'
  });
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

  const handleGoogleSignIn = async () => {
    try {
      const googleUser = await googleAuth.signIn();
      const credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.getAuthResponse().id_token
      );
      await firebase.auth().signInWithCredential(credential);
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <button onClick={handleGoogleSignIn}>Sign up with Google</button>
    </div>
  );
};

export default Signup;
