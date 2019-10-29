import React from 'react';
import {Link} from "react-router-dom";
import {useUser} from "reactfire";

const DialogContinue = (props) => {
    const user = useUser();
    const receiver = getReceiver();


    function getReceiver() {
        var dialog = props.dialog;
        var receiver = dialog.participant1;
        if (props.dialog.participant1.displayName == user.displayName) {
            receiver = dialog.participant2;
        }
        console.log("RECEIVER:", receiver);
        return receiver;
    }

    return (
        <Link className="filterDiscussions all unread single active" to={{
            pathname: "/dialogcontents/" + receiver.uid,

        }}>
            <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg"
                 data-toggle="tooltip" data-placement="top" title="Sarah"
                 alt="avatar"/>
            <div className="status online"></div>

            <div className="data">
                <h5>{receiver.displayName}</h5>
                <div className="new bg-yellow">
                    <span>5+</span>
                </div>
                <span>Mon</span>
                <p>{props.dialog.text}</p>
            </div>
        </Link>
    );


};
export default DialogContinue;
