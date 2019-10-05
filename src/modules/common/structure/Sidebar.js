import React from 'react';
import DialogDiscussions from "../../chat/dialog/structure/DialogDiscussions";

const Sidebar = (props) => {


    return (
        <div className="sidebar" id="sidebar">
            <div className="container">
                <div className="col-md-12">
                    <div className="tab-content">

                        <div className="tab-pane fade" id="members">
                            <figure className="setting"><img className="avatar-xl"
                                                             src="dist/img/avatars/avatar-male-1.jpg"
                                                             alt="avatar"/></figure>
                            <span className="logo"><img alt="" src="dist/img/logo.png"/></span>
                            <div className="search">
                                <form className="form-inline position-relative">
                                    <input type="search" className="form-control" id="people"
                                           placeholder="Search for people..."/>
                                    <button type="button" className="btn btn-link loop"><i
                                        className="ti-search"></i></button>
                                </form>
                                <button className="btn create" data-toggle="modal"
                                        data-target="#exampleModalCenter">
                                    <i className="ti-user">+</i></button>
                            </div>
                            <div className="list-group sort">
                                <button className="btn filterMembersBtn active show" data-toggle="list"
                                        data-filter="all">All
                                </button>
                                <button className="btn filterMembersBtn" data-toggle="list"
                                        data-filter="online">Online
                                </button>
                                <button className="btn filterMembersBtn" data-toggle="list"
                                        data-filter="offline">Offline
                                </button>
                            </div>
                            <div className="contacts">
                                <h1>Contacts</h1>
                                <div className="btn-group add-group" role="group">
                                    <button id="btnGroupDrop1" type="button"
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
                                <div className="list-group" id="contacts" role="tablist">
                                    <a href="#" className="filterMembers all online contact" data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Sarah"
                                             alt="avatar"/>
                                        <div className="status online"></div>
                                        <div className="data">
                                            <h5>Sarah Dalton</h5>
                                            <p>Sofia, Bulgaria</p>
                                        </div>
                                        <div className="person-add">
                                            <i className="ti-user"></i>
                                        </div>
                                    </a>
                                    <a href="#" className="filterMembers all online contact" data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-male-1.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Bob Frank"
                                             alt="avatar"/>
                                        <div className="status online"></div>
                                        <div className="data">
                                            <h5>Bob Frank</h5>
                                            <p>Washington, USA</p>
                                        </div>
                                        <div className="person-add">
                                            <i className="ti-user"></i>
                                        </div>
                                    </a>
                                    <a href="#" className="filterMembers all online contact" data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-female-2.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Lucy" alt="avatar"/>
                                        <div className="status online"></div>
                                        <div className="data">
                                            <h5>Lucy Grey</h5>
                                            <p>Shanghai, China</p>
                                        </div>
                                        <div className="person-add">
                                            <i className="ti-user"></i>
                                        </div>
                                    </a>
                                    <a href="#" className="filterMembers all online contact" data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-male-2.jpg"
                                             data-toggle="tooltip" data-placement="top" title="james idoms"
                                             alt="avatar"/>
                                        <div className="status online"></div>
                                        <div className="data">
                                            <h5>james idoms</h5>
                                            <p>Helena, Montana</p>
                                        </div>
                                        <div className="person-add">
                                            <i className="ti-user"></i>
                                        </div>
                                    </a>
                                    <a href="#" className="filterMembers all online contact" data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-female-3.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Linda Gates"
                                             alt="avatar"/>
                                        <div className="status online"></div>
                                        <div className="data">
                                            <h5>Linda gates</h5>
                                            <p>Indore, India</p>
                                        </div>
                                        <div className="person-add">
                                            <i className="ti-user"></i>
                                        </div>
                                    </a>
                                    <a href="#" className="filterMembers all offline contact" data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Karen joye"
                                             alt="avatar"/>
                                        <div className="status offline"></div>
                                        <div className="data">
                                            <h5>Karen joye</h5>
                                            <p>Chisinau, Moldova</p>
                                        </div>
                                        <div className="person-add">
                                            <i className="ti-user"></i>
                                        </div>
                                    </a>
                                    <a href="#" className="filterMembers all offline contact" data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-female-6.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Lisa Honey"
                                             alt="avatar"/>
                                        <div className="status offline"></div>
                                        <div className="data">
                                            <h5>Lisa Honey</h5>
                                            <p>Vienna, Austria</p>
                                        </div>
                                        <div className="person-add">
                                            <i className="ti-user"></i>
                                        </div>
                                    </a>
                                    <a href="#" className="filterMembers all offline contact" data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-male-3.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Daniel Cabral"
                                             alt="avatar"/>
                                        <div className="status offline"></div>
                                        <div className="data">
                                            <h5>Daniel Cabral</h5>
                                            <p>Oslo, Norway</p>
                                        </div>
                                        <div className="person-add">
                                            <i className="ti-user"></i>
                                        </div>
                                    </a>
                                    <a href="#" className="filterMembers all offline contact" data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-male-4.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Jhon Doe"
                                             alt="avatar"/>
                                        <div className="status offline"></div>
                                        <div className="data">
                                            <h5>Jhon Doe</h5>
                                            <p>London, United Kingdom</p>
                                        </div>
                                        <div className="person-add">
                                            <i className="ti-user"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                       <DialogDiscussions/>

                        <div id="notifications" className="tab-pane fade">
                            <figure className="setting"><img className="avatar-xl"
                                                             src="dist/img/avatars/avatar-male-1.jpg"
                                                             alt="avatar"/></figure>
                            <span className="logo"><img alt="" src="dist/img/logo.png"/></span>
                            <div className="search">
                                <form className="form-inline position-relative">
                                    <input type="search" className="form-control" id="notice"
                                           placeholder="Filter notifications..."/>
                                    <button type="button" className="btn btn-link loop">
                                        <i className="ti-filter"></i></button>
                                </form>
                            </div>
                            <div className="list-group sort">
                                <button className="btn filterNotificationsBtn active show" data-toggle="list"
                                        data-filter="all">All
                                </button>
                                <button className="btn filterNotificationsBtn" data-toggle="list"
                                        data-filter="latest">Latest
                                </button>
                                <button className="btn filterNotificationsBtn" data-toggle="list"
                                        data-filter="oldest">Oldest
                                </button>
                            </div>
                            <div className="notifications">
                                <h1>Notifications</h1>
                                <div className="list-group" id="alerts" role="tablist">
                                    <a href="#" className="filterNotifications all latest notification"
                                       data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Sarah"
                                             alt="avatar"/>
                                        <div className="status online"></div>
                                        <div className="data">
                                            <p>Sarah has accepted your friend request on Talkshak.</p>
                                            <span>Oct 17, 2018</span>
                                        </div>
                                    </a>
                                    <a href="#" className="filterNotifications all latest notification"
                                       data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-male-1.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Michael"
                                             alt="avatar"/>
                                        <div className="status online"></div>
                                        <div className="data">
                                            <p>Michael, you have a new friend suggestion today.</p>
                                            <span>Jun 21, 2018</span>
                                        </div>
                                    </a>
                                    <a href="#" className="filterNotifications all latest notification"
                                       data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-male-2.jpg"
                                             data-toggle="tooltip" data-placement="top" title="james idoms"
                                             alt="avatar"/>
                                        <div className="status online"></div>
                                        <div className="data">
                                            <p>james idoms have just sent you a new message.</p>
                                            <span>Feb 15, 2018</span>
                                        </div>
                                    </a>
                                    <a href="#" className="filterNotifications all latest notification"
                                       data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-female-6.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Lisa Honey"
                                             alt="avatar"/>
                                        <div className="status online"></div>
                                        <div className="data">
                                            <p>Lisa Honey has a birthday today. Wish her all the best.</p>
                                            <span>Mar 23, 2018</span>
                                        </div>
                                    </a>
                                    <a href="#" className="filterNotifications all latest notification"
                                       data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-female-3.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Sarah"
                                             alt="avatar"/>
                                        <div className="status online"></div>
                                        <div className="data">
                                            <p>Linda Gates has accepted your friend request on Talkshak.</p>
                                            <span>Jan 5, 2018</span>
                                        </div>
                                    </a>
                                    <a href="#" className="filterNotifications all oldest notification"
                                       data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Sarah"
                                             alt="avatar"/>
                                        <div className="status offline"></div>
                                        <div className="data">
                                            <p>Karen joye have just sent you a new message.</p>
                                            <span>Dec 22, 2017</span>
                                        </div>
                                    </a>
                                    <a href="#" className="filterNotifications all oldest notification"
                                       data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-female-2.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Sarah"
                                             alt="avatar"/>
                                        <div className="status offline"></div>
                                        <div className="data">
                                            <p>Michael, you have a new friend suggestion today.</p>
                                            <span>Nov 29, 2017</span>
                                        </div>
                                    </a>
                                    <a href="#" className="filterNotifications all oldest notification"
                                       data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-male-3.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Sarah"
                                             alt="avatar"/>
                                        <div className="status offline"></div>
                                        <div className="data">
                                            <p>Daniel Cabral have just sent you a new message.</p>
                                            <span>Sep 31, 2017</span>
                                        </div>
                                    </a>
                                    <a href="#" className="filterNotifications all oldest notification"
                                       data-toggle="list">
                                        <img className="avatar-md" src="dist/img/avatars/avatar-male-4.jpg"
                                             data-toggle="tooltip" data-placement="top" title="Sarah"
                                             alt="avatar"/>
                                        <div className="status offline"></div>
                                        <div className="data">
                                            <p>Jhon Doe has a birthday today. Wish him all the best.</p>
                                            <span>Jul 19, 2017</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="settings">
                            <div className="settings">
                                <div className="profile">
                                    <img className="avatar-xl" src="dist/img/avatars/avatar-male-1.jpg"
                                         alt="avatar"/>
                                    <h1><a href="#">Bob Frank</a></h1>
                                    <span>New York, USA</span>

                                </div>
                                <div className="categories" id="accordionSettings">
                                    <h1>Settings</h1>

                                    <div className="category">
                                        <a href="#" className="title collapsed" id="headingOne"
                                           data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                           aria-controls="collapseOne">
                                            <i className="ti-user"></i>
                                            <div className="data">
                                                <h5>My Account</h5>
                                                <p>Update your profile details</p>
                                            </div>
                                            <i className="ti-angle-down"></i>
                                        </a>
                                        <div className="collapse" id="collapseOne" aria-labelledby="headingOne"
                                             data-parent="#accordionSettings">
                                            <div className="content">
                                                <div className="upload">
                                                    <div className="data">
                                                        <img className="avatar-xl"
                                                             src="dist/img/avatars/avatar-male-1.jpg" alt="image"/>
                                                        <label>
                                                            <input type="file"/>
                                                            <span
                                                                className="btn button">Upload avatar</span>
                                                        </label>
                                                    </div>
                                                    <p>For best results, use an image at least 200px by 200px in
                                                        .jpg or .png format!</p>
                                                </div>
                                                <form>
                                                    <div className="parent">
                                                        <div className="field">
                                                            <label htmlFor="firstName">First
                                                                name <span>*</span></label>
                                                            <input type="text" className="form-control"
                                                                   id="firstName" placeholder="First name"
                                                                   defaultValue="Bob" required/>
                                                        </div>
                                                        <div className="field">
                                                            <label htmlFor="lastName">Last
                                                                name <span>*</span></label>
                                                            <input type="text" className="form-control"
                                                                   id="lastName" placeholder="Last name"
                                                                   defaultValue="Frank" required/>
                                                        </div>
                                                    </div>
                                                    <div className="field">
                                                        <label htmlFor="email">Email <span>*</span></label>
                                                        <input type="email" className="form-control" id="email"
                                                               placeholder="Enter your email address"
                                                               defaultValue="bobfrank@gmail.com" required/>
                                                    </div>
                                                    <div className="field">
                                                        <label htmlFor="password">Password</label>
                                                        <input type="password" className="form-control"
                                                               id="password" placeholder="Enter a new password"
                                                               defaultValue="password" required/>
                                                    </div>
                                                    <div className="field">
                                                        <label htmlFor="location">Location</label>
                                                        <input type="text" className="form-control" id="location"
                                                               placeholder="Enter your location"
                                                               defaultValue="New York, USA" required/>
                                                    </div>
                                                    <button className="btn btn-link w-100">Delete Account</button>
                                                    <button type="submit" className="btn button w-100">Apply
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="category">
                                        <a href="#" className="title collapsed" id="headingTwo"
                                           data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
                                           aria-controls="collapseTwo">
                                            <i className="ti-comments"></i>
                                            <div className="data">
                                                <h5>Chats</h5>
                                                <p>Check your chat history</p>
                                            </div>
                                            <i className="ti-angle-down"></i>
                                        </a>
                                        <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo"
                                             data-parent="#accordionSettings">
                                            <div className="content layer">
                                                <div className="history">
                                                    <p>When you clear your conversation history, the messages will
                                                        be deleted from your own device.</p>
                                                    <p>The messages won't be deleted or cleared on the devices of
                                                        the people you chatted with.</p>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="same-address"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="same-address">Hide will remove your
                                                            chat history from the recent list.</label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="save-info"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="save-info">Delete will remove your
                                                            chat history from the device.</label>
                                                    </div>
                                                    <button type="submit" className="btn button w-100">Clear Chat
                                                        History
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="category">
                                        <a href="#" className="title collapsed" id="headingThree"
                                           data-toggle="collapse" data-target="#collapseThree"
                                           aria-expanded="true" aria-controls="collapseThree">
                                            <i className="ti-bell"></i>
                                            <div className="data">
                                                <h5>Notifications</h5>
                                                <p>Turn notifications on or off</p>
                                            </div>
                                            <i className="ti-angle-down"></i>
                                        </a>
                                        <div className="collapse" id="collapseThree"
                                             aria-labelledby="headingThree" data-parent="#accordionSettings">
                                            <div className="content no-layer">
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Desktop Notifications</h5>
                                                        <p>You can set up Talkshak to receive notifications when
                                                            you have new messages.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox" checked/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Unread Message Badge</h5>
                                                        <p>If enabled shows a red badge on the Talkshak app icon
                                                            when you have unread messages.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox" checked/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Taskbar Flashing</h5>
                                                        <p>Flashes the Talkshak app on mobile in your taskbar when
                                                            you have new notifications.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox"/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Notification Sound</h5>
                                                        <p>Set the app to alert you via notification sound when
                                                            you have unread messages.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox" checked/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Vibrate</h5>
                                                        <p>Vibrate when receiving new messages (Ensure system
                                                            vibration is also enabled).</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox"/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Turn On Lights</h5>
                                                        <p>When someone send you a text message you will receive
                                                            alert via notification light.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox"/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="category">
                                        <a href="#" className="title collapsed" id="headingFour"
                                           data-toggle="collapse" data-target="#collapseFour" aria-expanded="true"
                                           aria-controls="collapseFour">
                                            <i className="ti-reload"></i>
                                            <div className="data">
                                                <h5>Connections</h5>
                                                <p>Sync your social accounts</p>
                                            </div>
                                            <i className="ti-angle-down"></i>
                                        </a>
                                        <div className="collapse" id="collapseFour" aria-labelledby="headingFour"
                                             data-parent="#accordionSettings">
                                            <div className="content">
                                                <div className="app">
                                                    <img src="dist/img/integrations/slack.svg" alt="app"/>
                                                    <div className="permissions">
                                                        <h5>Skrill</h5>
                                                        <p>Read, Write, Comment</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox" checked/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="app">
                                                    <img src="dist/img/integrations/dropbox.svg" alt="app"/>
                                                    <div className="permissions">
                                                        <h5>Dropbox</h5>
                                                        <p>Read, Write, Upload</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox" checked/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="app">
                                                    <img src="dist/img/integrations/drive.svg" alt="app"/>
                                                    <div className="permissions">
                                                        <h5>Google Drive</h5>
                                                        <p>No permissions set</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox"/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="app">
                                                    <img src="dist/img/integrations/trello.svg" alt="app"/>
                                                    <div className="permissions">
                                                        <h5>Trello</h5>
                                                        <p>No permissions set</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox"/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="category">
                                        <a href="#" className="title collapsed" id="headingFive"
                                           data-toggle="collapse" data-target="#collapseFive" aria-expanded="true"
                                           aria-controls="collapseFive">
                                            <i className="ti-pencil"></i>
                                            <div className="data">
                                                <h5>Appearance</h5>
                                                <p>Customize the look of Talkshak</p>
                                            </div>
                                            <i className="ti-angle-down"></i>
                                        </a>
                                        <div className="collapse" id="collapseFive" aria-labelledby="headingFive"
                                             data-parent="#accordionSettings">
                                            <div className="content no-layer">
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Turn Off Lights</h5>
                                                        <p>The dark mode is applied to core areas of the app that
                                                            are normally displayed as light.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox"/>
                                                        <span className="slider round mode"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="category">
                                        <a href="#" className="title collapsed" id="headingSix"
                                           data-toggle="collapse" data-target="#collapseSix" aria-expanded="true"
                                           aria-controls="collapseSix">
                                            <i className="ti-flag"></i>
                                            <div className="data">
                                                <h5>Language</h5>
                                                <p>Select preferred language</p>
                                            </div>
                                            <i className="ti-angle-down"></i>
                                        </a>
                                        <div className="collapse" id="collapseSix" aria-labelledby="headingSix"
                                             data-parent="#accordionSettings">
                                            <div className="content layer">
                                                <div className="language">
                                                    <label htmlFor="country">Language</label>
                                                    <select className="custom-select" id="country" required>
                                                        <option value="">Select an language...</option>
                                                        <option>English, UK</option>
                                                        <option>English, US</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="category">
                                        <a href="#" className="title collapsed" id="headingSeven"
                                           data-toggle="collapse" data-target="#collapseSeven"
                                           aria-expanded="true" aria-controls="collapseSeven">
                                            <i className="ti-lock"></i>
                                            <div className="data">
                                                <h5>Privacy & Safety</h5>
                                                <p>Control your privacy settings</p>
                                            </div>
                                            <i className="ti-angle-down"></i>
                                        </a>
                                        <div className="collapse" id="collapseSeven"
                                             aria-labelledby="headingSeven" data-parent="#accordionSettings">
                                            <div className="content no-layer">
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Keep Me Safe</h5>
                                                        <p>Automatically scan and delete direct messages you
                                                            receive from everyone that contain explict
                                                            content.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox"/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>My Friends Are Nice</h5>
                                                        <p>If enabled scans direct messages from everyone unless
                                                            they are listed as your friend.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox" checked/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Everyone can add me</h5>
                                                        <p>If enabled anyone in or out your friends of friends
                                                            list can send you a friend request.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox" checked/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Friends of Friends</h5>
                                                        <p>Only your friends or your mutual friends will be able
                                                            to send you a friend reuqest.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox" checked/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Data to Improve</h5>
                                                        <p>This settings allows us to use and process information
                                                            for analytical purposes.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox"/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                                <div className="set">
                                                    <div className="details">
                                                        <h5>Data to Customize</h5>
                                                        <p>This settings allows us to use your information to
                                                            customize Talkshak for you.</p>
                                                    </div>
                                                    <label className="switch">
                                                        <input type="checkbox"/>
                                                        <span className="slider round"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="category">
                                        <a href="sign-in.html" className="title collapsed">
                                            <i className="ti-power-off"></i>
                                            <div className="data">
                                                <h5>Power Off</h5>
                                                <p>Log out of your account</p>
                                            </div>
                                            <i className="ti-angle-down"></i>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    );


};
export default Sidebar;
