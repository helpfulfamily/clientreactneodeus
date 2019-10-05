import React from 'react';
import {Link} from "react-router-dom";

const DialogDiscussions = (props) => {


    return (
        <div id="discussions" className="tab-pane fade in active show">
            <figure className="setting"><img className="avatar-xl"
                                             src="dist/img/avatars/avatar-male-1.jpg"
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
                    <Link className="filterDiscussions all unread single active" to={{
                        pathname:    "/dialogcontents/adminha" ,

                    }}>
                        <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg"
                             data-toggle="tooltip" data-placement="top" title="Sarah"
                             alt="avatar"/>
                        <div className="status online"></div>

                        <div className="data">
                            <h5>Sarah Dalton</h5>
                            <div className="new bg-yellow">
                                <span>5+</span>
                            </div>
                            <span>Mon</span>
                            <p>A new feature has been updated...</p>
                        </div>
                    </Link>
                    <Link className="filterDiscussions all unread single" to={{
                        pathname:    "/dialogcontents/algan1" ,

                    }}>

                        <img className="avatar-md" src="dist/img/avatars/avatar-male-1.jpg"
                             data-toggle="tooltip" data-placement="top" title="Michael"
                             alt="avatar"/>
                        <div className="status offline"></div>

                        <div className="data">
                            <h5>Bob Frank</h5>
                            <div className="new bg-red">
                                <span>9+</span>
                            </div>
                            <span>Sun</span>
                            <p>How can i improve my chances?</p>
                        </div>
                    </Link>
                    <a href="#list-chat" className="filterDiscussions all read single"
                       id="list-chat-list2" data-toggle="list" role="tab">
                        <img className="avatar-md" src="dist/img/avatars/avatar-female-2.jpg"
                             data-toggle="tooltip" data-placement="top" title="Lucy" alt="avatar"/>
                        <div className="status online"></div>
                        <div className="data">
                            <h5>Lucy Grey</h5>
                            <span>Tus</span>
                            <p>Typing...</p>
                        </div>
                    </a>
                    <a href="#list-empty" className="filterDiscussions all read single"
                       id="list-empty-list2" data-toggle="list" role="tab">
                        <img className="avatar-md" src="dist/img/avatars/avatar-male-2.jpg"
                             data-toggle="tooltip" data-placement="top" title="james idoms"
                             alt="avatar"/>
                        <div className="status offline"></div>
                        <div className="data">
                            <h5>james idoms</h5>
                            <span>5 mins</span>
                            <p>By injected humour, or randomi...</p>
                        </div>
                    </a>
                    <a href="#list-chat" className="filterDiscussions all read single"
                       id="list-chat-list3" data-toggle="list" role="tab">
                        <img className="avatar-md" src="dist/img/avatars/avatar-female-3.jpg"
                             data-toggle="tooltip" data-placement="top" title="Linda Gates"
                             alt="avatar"/>
                        <div className="status away"></div>
                        <div className="data">
                            <h5>Linda gates</h5>
                            <span>Mon</span>
                            <p>No more running out of the office...</p>
                        </div>
                    </a>
                    <a href="#list-empty" className="filterDiscussions all read single"
                       id="list-empty-list3" data-toggle="list" role="tab">
                        <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg"
                             data-toggle="tooltip" data-placement="top" title="Karen joye"
                             alt="avatar"/>
                        <div className="status online"></div>
                        <div className="data">
                            <h5>Karen joye</h5>
                            <span>Fri</span>
                            <p>All your favourite books at...</p>
                        </div>
                    </a>
                    <a href="#list-chat" className="filterDiscussions all unread single"
                       id="list-chat-list4" data-toggle="list" role="tab">
                        <img className="avatar-md" src="dist/img/avatars/avatar-female-6.jpg"
                             data-toggle="tooltip" data-placement="top" title="Lisa Honey"
                             alt="avatar"/>
                        <div className="status offline"></div>

                        <div className="data">
                            <h5>Lisa Honey</h5>
                            <div className="new bg-indigo">
                                <span>1+</span>
                            </div>
                            <span>Feb 10</span>
                            <p>Be the first to know about...</p>
                        </div>
                    </a>
                    <a href="#list-empty" className="filterDiscussions all read single"
                       id="list-empty-list4" data-toggle="list" role="tab">
                        <img className="avatar-md" src="dist/img/avatars/avatar-male-3.jpg"
                             data-toggle="tooltip" data-placement="top" title="Daniel Cabral"
                             alt="avatar"/>
                        <div className="status offline"></div>
                        <div className="data">
                            <h5>Daniel Cabral</h5>
                            <span>Feb 9</span>
                            <p>Dear Daniel Cabral, your massage is today...</p>
                        </div>
                    </a>
                    <a href="#list-chat" className="filterDiscussions all unread single"
                       id="list-chat-list5" data-toggle="list" role="tab">
                        <img className="avatar-md" src="dist/img/avatars/avatar-male-4.jpg"
                             data-toggle="tooltip" data-placement="top" title="Jhon Doe"
                             alt="avatar"/>
                        <div className="status online"></div>

                        <div className="data">
                            <h5>Jhon Doe</h5>
                            <div className="new bg-green">
                                <span>4+</span>
                            </div>
                            <span>Thu</span>
                            <p>Unfortunately session cancelled..</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    );


};
export default DialogDiscussions;
