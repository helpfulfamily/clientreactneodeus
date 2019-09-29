import React from 'react';
import DialogContentAttachment from "./DialogContentAttechment";
import DialogContentTyping from "./DialogContentTyping";

const DialogContentGroup = (props) => {

    var classNameGroup = "text-group ";
    var classNameText = "text ";
    var attachment = "";
    var typing = "";

    if (typeof props.data.who != "undefined") {

        classNameGroup = classNameGroup + props.data.who;
        classNameText = classNameText + props.data.who;
    }
    if (typeof props.data.attachment != "undefined") {
        attachment = <DialogContentAttachment/>;
    }
    if (props.data == "typing") {
        typing = <DialogContentTyping/>;
    } else {
        typing = props.data.content.text;
    }
    return (

        <div className={classNameGroup}>
            <div className={classNameText}>
                {attachment}
                {typing}

            </div>
        </div>

    );


};
export default DialogContentGroup;
