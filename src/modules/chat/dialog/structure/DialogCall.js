import React from 'react';

const DialogCall = (props) => {


    return (
        <div className="call" id="call1">
            <div className="content">
                <div className="container">
                    <div className="col-md-12">
                        <div className="inside">
                            <div className="panel">
                                <div className="participant">
                                    <img className="avatar-xxl"
                                         src="dist/img/avatars/avatar-female-5.jpg" alt="avatar"/>
                                    <span>Connecting to Sarah</span>
                                    <div className="wave">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                                <div className="options">
                                    <button className="btn option"><i className="ti-microphone"></i>
                                    </button>
                                    <button className="btn option"><i className="ti-video-camera"></i>
                                    </button>
                                    <button className="btn option"><i className="ti-user">+</i>
                                    </button>
                                    <button className="btn option"><i className="ti-volume"></i>
                                    </button>
                                    <button className="btn option"><i className="ti-comment"></i>
                                    </button>
                                </div>
                                <button className="btn option call-end"><i className="ti-close"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};
export default DialogCall;
