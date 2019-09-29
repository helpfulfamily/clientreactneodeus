import React from 'react';

const DialogContentAttachment = (props) => {

    return (

        <div className="attachment">
            <button className="btn attach"
                    title="Click to download"><i
                className="ti-file"></i></button>
            <div className="file">
                <h5><a href="#" title="Click to download">Policy
                    Sheet.pdf</a></h5>
                <span>80kb Document</span>
            </div>
        </div>

    );


};
export default DialogContentAttachment;
