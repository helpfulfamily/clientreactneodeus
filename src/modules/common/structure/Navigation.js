import React, {useEffect} from 'react';
import {getLoginUser, login} from "../../user/process/LoginProcess";
import {getUserInformationOut} from "../../user/door/GetUserInformationDoor";

import {useDispatch, useSelector} from "react-redux";
import {connectWebSocket} from "../../../tool/websocket/action/WebSocketHook";


const handleLogin = e => {
    e.preventDefault();

    login();


}


const Navigation = (props) => {
    const dispatch = useDispatch();
    const userInformation = useSelector(state => state.userInformation);
    function LoginPromiseResolved(userInformation){


        dispatch(getUserInformationOut(userInformation));
        dispatch(connectWebSocket(userInformation.sso.username));

    }
    useEffect(() => {
            getLoginUser().then((loginUser) =>
                LoginPromiseResolved(loginUser))
                .catch(function (hata) {
                    console.log("hata");
                });


    }, []);


    return (
        <div className="navigation">
            <div className="container">
                <div className="inside">
                    <div className="nav nav-tab menu">
                        <a href="#settings" data-toggle="tab" title="User Setting">
                            <i className="ti-panel"></i>
                            Setting
                        </a>
                        <a href="#members" data-toggle="tab" title="All members">
                            <i className="ti-home"></i>
                            All Friends
                        </a>
                        <a href="#discussions" data-toggle="tab" className="active" title="Chat">
                            <i className="ti-comment-alt"></i>
                            Recent Chat
                        </a>
                        <a href="#notifications" data-toggle="tab" className="f-grow1" title="Notifications">
                            <i className="ti-bell"></i>
                            Notifications
                        </a>
                        <a href="" id="dark" className="dark-theme" title="Use Night Mode">
                            <i className="ti-wand"></i>
                            Night Mode
                        </a>
                        <a href="sign-in.html" className="btn power" title="Sign Out"><i
                            className="ti-power-off"></i></a>

                        <a href="#" onClick={handleLogin}>Login</a>

                    </div>
                </div>
            </div>
        </div>
    );


};
export default Navigation;
