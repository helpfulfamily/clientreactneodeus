import {useFirebaseApp, useFirestoreCollectionData, useFirestoreDocData} from "reactfire";


export function useUserNeoudeus(userID) {
    const firebaseApp = useFirebaseApp();
    const refUserNeodeus = firebaseApp
        .firestore()
        .collection('userNeodeus')
        .doc(userID);

    const userNeoudeus = useFirestoreDocData(refUserNeodeus);

    return userNeoudeus;
}

export function useUserNeoudeusByUsername(username) {
    const firebaseApp = useFirebaseApp();
    var user = null;
    const query = firebaseApp.firestore().collection('userNeodeus')
        .where("username", "==", username);

    const result = useFirestoreCollectionData(query);

    if (result && result.length > 0) {
        user = result[0];
    }

    return user;
}

