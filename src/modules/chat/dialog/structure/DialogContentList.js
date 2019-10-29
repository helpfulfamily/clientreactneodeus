import React, {useEffect, useState} from 'react';
import DialogContent from "./DialogContent";
import 'firebase/firestore';
import {SuspenseWithPerf, useFirebaseApp, useFirestoreCollectionData, useUser} from 'reactfire';

const DialogContentList = (props) => {
    const user = useUser();
    const [contentCount, setContentCount] = useState(9)

    const [isScrollBottom, setIsScrollBottom] = useState(false)
    const firebaseApp = useFirebaseApp();

    const ref = firebaseApp.firestore().collection('dialogs')
        .doc(user.uid)
        .collection("dialogContents");
    const dialogContents = useFirestoreCollectionData(ref);



    useEffect(() => {
        toBottom();

    }, []);


    useEffect(() => {
        if (isScrollBottom) {
            toBottom();
        }


    }, [dialogContents]);


    function toBottom() {
        const messageBody = document.querySelector('#content');

        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    }

    function listenScrollEvent() {


        const messageBody = document.querySelector('#content');

        var scrollBottonPos = messageBody.scrollHeight - messageBody.clientHeight;
        if (messageBody.scrollTop < scrollBottonPos) {
            setIsScrollBottom(false);

        } else if (messageBody.scrollTop == scrollBottonPos) {
            setIsScrollBottom(true);

        }

        if (messageBody.scrollTop == 0) {
            setContentCount(contentCount + 9);
        }
    }


    function createData(dialogContent) {

        var who = dialogContent.sender.username;
        var attachment;
        if (user && who == user.displayName) {
            who = "me";
        }
        if (typeof dialogContent.text !== "undefined" && dialogContent.text !== null && dialogContent.text.includes("pdf")) {
            attachment = "pdf";
        }
        var data = {who: who, attachment: attachment, content: dialogContent};



        return data;
    }


    return (
        <div className="content" id="content" onScroll={listenScrollEvent}>
            <div className="container">

                <div className="col-md-12">


                    {dialogContents && dialogContents.map(dialogContent =>

                        (
                            <DialogContent data={createData(dialogContent)}/>
                        )
                    )}

                </div>
            </div>
        </div>

    );


};

const SuspenseWrapperDialogContentList = props => {
    return (
        <SuspenseWithPerf fallback="loading..." traceId="RTDB-root">
            <DialogContentList/>
        </SuspenseWithPerf>
    );
};

export default SuspenseWrapperDialogContentList;

