import React, {useState} from 'react';
import Sidebar from "../../../common/structure/Sidebar";
import FriendRequestModal from "../../../observation/FriendRequestModal";
import DialogStartNew from "./DialogStartNew";
import DialogOptions from "./DialogOptions";
import DialogContentList from "./DialogContentList";
import DialogContentForm from "./DialogContentForm";
import DialogCall from "./DialogCall";
import DialogContentListEmpty from "./DialogContentListEmpty";
import Navigation from "../../../common/structure/Navigation";
import {Route} from 'react-router-dom';


function DialogFrame() {
    const [receiverID, setReceiverID] = useState("");

    return (

        <main>
            <div className="layout">
                <Navigation/>

                <Sidebar/>

                <FriendRequestModal/>

                <DialogStartNew/>

                <div className="main" id="chat-dialog">
                    <div className="tab-content" id="nav-tabContent">

                        <div className="babble tab-pane fade active show" id="list-chat" role="tabpanel"
                             aria-labelledby="list-chat-list">

                            <div className="chat" id="chat1">
                                <DialogOptions/>

                                    <Route  path="/dialogcontents/:receiverID" component={DialogContentList}/>
                                    <Route  path="/dialogcontents/:receiverID" component={DialogContentForm}/>

                            </div>

                            <DialogCall/>

                        </div>

                        <DialogContentListEmpty/>


                    </div>
                </div>
            </div>

        </main>


    );
}

export default DialogFrame;
