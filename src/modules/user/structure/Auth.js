import 'firebase/auth';
import '@firebase/performance';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {SuspenseWithPerf, useFirebaseApp, useUser} from 'reactfire';

const signOut = firebaseApp =>
    firebaseApp
        .auth()
        .signOut()
        .then(() => console.log('signed out'));

const UserDetails = ({user}) => {
    const firebaseApp = useFirebaseApp();

    return (
        <>
            <a href="sign-in.html" onClick={() => signOut(firebaseApp)} className="btn power" title="Sign Out"><i
                className="ti-power-off"></i></a>

        </>
    );
};

const SignInForm = () => {
    const firebaseApp = useFirebaseApp();

    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false
        }
    };

    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()}/>
    );
};

const FirebaseAuthStateButton = () => {
    const user = useUser();
    return user ? <UserDetails user={user}/> : <SignInForm/>;
};

const AuthButton = props => {
    return (
        <SuspenseWithPerf
            traceId={'firebase-user-wait'}
            fallback={<p>loading...</p>}
        >
            <FirebaseAuthStateButton/>
        </SuspenseWithPerf>
    );
};

export default AuthButton;
