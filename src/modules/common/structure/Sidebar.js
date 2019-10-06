import React from 'react';
import DialogDiscussions from "../../chat/dialog/structure/DialogDiscussions";
import Settings from "./Settings";
import Friends from "../../observation/Friends";
import Notifications from "./Notifications";

const Sidebar = (props) => {


    return (
        <div className="sidebar" id="sidebar">
            <div className="container">
                <div className="col-md-12">
                    <div className="tab-content">

                       <Friends/>

                       <DialogDiscussions/>

                       <Notifications/>

                        <Settings/>
                    </div>
                </div>
            </div>


        </div>

    );


};
export default Sidebar;
