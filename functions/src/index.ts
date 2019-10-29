import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

exports.userNeodeusCreation = functions.auth.user().onCreate((user) => {
    var userNeodeus = {
        "userId": user.uid,
        "displayName": user.displayName,
        "photoURL": user.photoURL
    };
    const config = functions.config();
    if (!admin.apps.length) {
        admin.initializeApp(config.firebase);
    }

    const doc = admin.firestore().doc(`/userNeodeus/` + user.uid);

    doc.set(userNeodeus)
        .then(function () {
            console.log('User created:', userNeodeus);
        })
        .catch(function (error) {
            console.log('There has been a horrible mistake!', error);
        })

    return userNeodeus;
});
