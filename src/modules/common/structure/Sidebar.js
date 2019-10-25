import React from 'react';
import DialogDiscussions from "../../chat/dialog/structure/DialogDiscussions";
import Settings from "./Settings";
import Friends from "../../observation/Friends";
import Notifications from "./Notifications";
import {SuspenseWithPerf} from "reactfire";

const Sidebar = (props) => {


    return (
        <div className="sidebar" id="sidebar">
            <div className="container">
                <div className="col-md-12">
                    <div className="tab-content">

                       <Friends/>

                        <DialogDiscussions buttonNav={props.buttonNav}/>

                       <Notifications/>

                        <Settings/>
                    </div>
                </div>
            </div>


        </div>

    );


};
const SuspenseWrapper = props => {
    return (
        <SuspenseWithPerf fallback="loading..." traceId="RTDB-root">
            <Sidebar  {...props}/>
        </SuspenseWithPerf>
    );
};

export default SuspenseWrapper;
