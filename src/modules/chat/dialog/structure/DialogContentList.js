import React from 'react';
import DialogContent from "./DialogContent";
import 'firebase/database';
import {SuspenseWithPerf, useDatabaseList, useFirebaseApp} from 'reactfire';

const DialogContentList = (props) => {

    const firebaseApp = useFirebaseApp();
    const ref = firebaseApp.database().ref('dialogContents');
    const dialogContents = useDatabaseList(ref);


    function createData(dialogContent) {

        var who = dialogContent.sender.username;
        var attachment;
        if (who == "adminha") {
            who = "me";
        }
        if (typeof dialogContent.text!=="undefined" && dialogContent.text!==null && dialogContent.text.includes("pdf")) {
            attachment = "pdf";
        }
        var data = {who: who, attachment: attachment, content: dialogContent};
        console.log(data);
        return data;
    }


    return (
        <div className="content" id="content">
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

