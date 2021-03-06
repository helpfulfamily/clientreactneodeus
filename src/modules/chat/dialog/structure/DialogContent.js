import React from 'react';
import DialogContentGroup from "./DialogContentGroup";

const DialogContent = (props) => {

    var classNameMessage = "message ";


    if (typeof props.data.who != "undefined") {
        classNameMessage = classNameMessage + props.data.who;

    }

    return (
        <div className={classNameMessage}>
            <img className="avatar-md" src={props.data.content.sender.photoURL}
                 data-toggle="tooltip" data-placement="top" title={props.data.content.sender.username}
                 alt="avatar"/>
            <div className="text-main">
                <DialogContentGroup data={props.data}/>
                <span>09:46 AM</span>
            </div>
        </div>
    );


};
export default DialogContent;
