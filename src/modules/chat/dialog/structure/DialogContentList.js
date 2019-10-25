import React, {useEffect, useState} from 'react';
import DialogContent from "./DialogContent";
import 'firebase/database';
import {SuspenseWithPerf, useDatabaseList, useFirebaseApp, useUser} from 'reactfire';

const DialogContentList = (props) => {
    const user = useUser();
    const [contentCount, setContentCount] = useState(9)

    const [isScrollBottom, setIsScrollBottom] = useState(false)
    const firebaseApp = useFirebaseApp();
    const ref = firebaseApp.database().ref('dialogContents').orderByKey().limitToLast(contentCount);
    const dialogContents = useDatabaseList(ref);

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
        if (who == user.displayName) {
            who = "me";
        }
        if (typeof dialogContent.text!=="undefined" && dialogContent.text!==null && dialogContent.text.includes("pdf")) {
            attachment = "pdf";
        }
        var data = {who: who, attachment: attachment, content: dialogContent};

        return data;
    }


    return (
        <div className="content" id="content" onScroll={listenScrollEvent}>
            <div className="container">

                <div className="col-md-12">


                    {dialogContents.map(({snapshot}) => (
                        <DialogContent data={createData(snapshot.val())}/>
                    ))}

                </div>
            </div>
        </div>

    );


};

const SuspenseWrapper = props => {
    return (
        <SuspenseWithPerf fallback="loading..." traceId="RTDB-root">
            <DialogContentList/>
        </SuspenseWithPerf>
    );
};

export default SuspenseWrapper;

