import React from 'react';
import DialogContentForm from "./DialogContentForm";


const DialogContentListEmpty = (props) => {

    return (

        <div className="babble tab-pane fade" id="list-empty" role="tabpanel"
             aria-labelledby="list-empty-list">

            <div className="chat" id="chat">
                <div className="top">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="inside">
                                <div className="status offline"></div>
                                <div className="data">
                                    <h5><a href="#">Bob Frank</a></h5>
                                    <span>Inactive</span>
                                </div>
                                <button className="btn d-md-block d-none audio-call" title="Audio call"><i
                                    className="ti-headphone-alt"></i></button>
                                <button className="btn d-md-block d-none video-call" title="Video call"><i
                                    className="ti-video-camera"></i></button>
                                <button className="btn d-md-block d-none" title="More Info"><i
                                    className="ti-info"></i></button>
                                <div className="dropdown">
                                    <button className="btn" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false"><i className="ti-view-grid"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a href="#" className="dropdown-item"><i
                                            className="ti-headphone-alt"></i>Voice Call</a>
                                        <a href="#" className="dropdown-item"><i
                                            className="ti-video-camera"></i>Video Call</a>
                                        <hr/>
                                        <a href="#" className="dropdown-item"><i
                                            className="ti-server"></i>Clear History</a>
                                        <a href="#" className="dropdown-item"><i
                                            className="ti-hand-stop"></i>Block Contact</a>
                                        <a href="#" className="dropdown-item"><i
                                            className="ti-trash"></i>Delete Contact</a>
                                    </div>
                                </div>
                                <button className="btn back-to-mesg" title="Back">
                                    <i className="ti-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content empty">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="no-messages">
                                <i className="ti-comments"></i>
                                <p>Seems people are shy to start the chat. Break the ice send the first
                                    message.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogContentForm/>
            </div>

            <div className="call" id="call2">
                <div className="content">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="inside">
                                <div className="panel">
                                    <div className="participant">
                                        <img className="avatar-xxl"
                                             src="dist/img/avatars/avatar-female-2.jpg" alt="avatar"/>
                                        <span>Connecting to sarah</span>
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

        </div>
    );


};

export default DialogContentListEmpty;
