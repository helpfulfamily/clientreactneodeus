import React from 'react';

const Friends = (props) => {


    return (
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


    );


};
export default Friends;
