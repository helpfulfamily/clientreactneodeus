import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCblX5FG2VH_Bb3vJWRKhsWq_B4eneodRw",
    authDomain: "neodeus-606a6.firebaseapp.com",
    databaseURL: "https://neodeus-606a6.firebaseio.com",
    projectId: "neodeus-606a6",
    storageBucket: "neodeus-606a6.appspot.com",
    messagingSenderId: "1087004736474",
    appId: "1:1087004736474:web:44c71373f08dbd051e1ee3",
    measurementId: "G-8CKMR7E8GG"
};
// Initiali
var app = firebase.initializeApp(firebaseConfig);

// Signs-in Friendly Chat.
export function signIn() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
}

// Signs-out of Friendly Chat.
function signOut() {
    // Sign out of Firebase.
    firebase.auth().signOut();
}

// Initiate Firebase Auth.
export function initFirebaseAuth() {
    // Listen to auth state changes.
    firebase.auth().onAuthStateChanged(authStateObserver);
}

// Returns the signed-in user's profile pic URL.
function getProfilePicUrl() {
    return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}

// Returns the signed-in user's display name.
function getUserName() {
    return firebase.auth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
    return !!firebase.auth().currentUser;
}


// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
    if (user) { // User is signed in!
        // Get the signed-in user's profile pic and name.
        var profilePicUrl = getProfilePicUrl();
        var userName = getUserName();


        // We save the Firebase Messaging Device token and enable notifications.
        saveMessagingDeviceToken();
    }
}

function addSizeToGoogleProfilePic(url) {
    if (url.indexOf('googleusercontent.com') !== -1 && url.indexOf('?') === -1) {
        return url + '?sz=150';
    }
    return url;
}

// Saves the messaging device token to the datastore.
function saveMessagingDeviceToken() {
    firebase.messaging().getToken().then(function (currentToken) {
        if (currentToken) {
            console.log('Got FCM device token:', currentToken);
            // Saving the Device Token to the datastore.
            firebase.firestore().collection('fcmTokens').doc(currentToken)
                .set({uid: firebase.auth().currentUser.uid});
        } else {
            // Need to request permissions to show notifications.
            requestNotificationsPermissions();
        }
    }).catch(function (error) {
        console.error('Unable to get messaging token.', error);
    });
}

// Requests permissions to show notifications.
function requestNotificationsPermissions() {
    console.log('Requesting notifications permission...');
    firebase.messaging().requestPermission().then(function () {
        // Notification permission granted.
        saveMessagingDeviceToken();
    }).catch(function (error) {
        console.error('Unable to get permission to notify.', error);
    });
}



