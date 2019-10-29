import React, {useEffect} from 'react';
import {SuspenseWithPerf, useFirebaseApp, useFirestoreCollectionData, useUser} from "reactfire";
import $ from "jquery";
import DialogContinue from "./DialogContinue";

const DialogDiscussions = (props) => {
    const user = useUser();
    useEffect(() => {
        $('.setting').on('click', function () {
            $('.navigation').toggleClass('active');
            $('.sidebar').toggleClass('slide');

        });

    }, []);


    const firebaseApp = useFirebaseApp();
    const refDialogs = firebaseApp.firestore().collection('dialogs')
        .where("participants", "array-contains", user.displayName)

    const dialogs = useFirestoreCollectionData(refDialogs);
    return (

        <div id="discussions" className="tab-pane fade in active show">

            <figure className="setting"><img className="avatar-xl"
                                             src={user ? user.photoURL : ""}
                                             alt="avatar"/></figure>
            <span className="logo"><img src="dist/img/logo.png" alt=""/></span>
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="conversations"
                           placeholder="Search for conversations..."/>
                    <button type="button" className="btn btn-link loop"><i
                        className="ti-search"></i></button>
                </form>
                <button className="btn create" data-toggle="modal" data-target="#startnewchat"><i
                    className="ti-pencil"></i></button>
            </div>
            <div className="list-group sort">
                <button className="btn filterDiscussionsBtn active show" data-toggle="list"
                        data-filter="all">All
                </button>
                <button className="btn filterDiscussionsBtn" data-toggle="list"
                        data-filter="read">Favourit
                </button>
                <button className="btn filterDiscussionsBtn" data-toggle="list"
                        data-filter="unread">Unread
                </button>
            </div>
            <div className="discussions" id="scroller">
                <h1>Chats</h1>
                <div className="btn-group add-group" role="group">
                    <button id="btnGroupDrop2" type="button"
                            className="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        Add +
                    </button>
                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a className="dropdown-item" href="#">New user</a>
                        <a className="dropdown-item" href="#">New Group +</a>
                        <a className="dropdown-item" href="#">Private Chat +</a>
                    </div>
                </div>
                <div className="list-group" id="chats" role="tablist">
                    {dialogs && dialogs.map(dialog =>

                        (
                            <DialogContinue dialog={dialog}/>
                        )
                    )}

                </div>
            </div>
        </div>

    );


};
const SuspenseWrapperDialogDiscussions = props => {
    const user = useUser();
    if (user) {
        return (
            <SuspenseWithPerf fallback="loading..." traceId="RTDB-root">
                <DialogDiscussions {...props}/>
            </SuspenseWithPerf>
        );
    } else {
        return (
            <span></span>
        );
    }

};

export default SuspenseWrapperDialogDiscussions;
