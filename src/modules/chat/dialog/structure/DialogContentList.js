import React from 'react';
import DialogContent from "./DialogContent";

const DialogContentList = (props) => {

    return (
        <div className="content" id="content">
            <div className="container">
                <div className="col-md-12">
                    <div className="date">
                        <hr/>
                        <span>Yesterday</span>
                        <hr/>
                    </div>
                    <DialogContent data={createData({sender: {username: "adminha2"}, text: "deneme "})}/>
                    <DialogContent data={createData({sender: {username: "adminha"}, text: "deneme "})}/>
                    <DialogContent data={createData({sender: {username: "adminha"}, text: "deneme "})}/>
                    <DialogContent data={createData({sender: {username: "adminha1"}, text: "deneme "})}/>
                    <DialogContent data={createData({sender: {username: "adminha"}, text: "deneme "})}/>
                    <DialogContent data={createData({sender: {username: "adminha1"}, text: "deneme "})}/>
                    <DialogContent data={createData({sender: {username: "adminha"}, text: "deneme pdf"})}/>
                    <DialogContent data={createData({sender: {username: "adminha"}, text: "deneme "})}/>

                    <DialogContent data="typing"/>

                </div>
            </div>
        </div>

    );


};

function createData(dialogContent) {


    var who = dialogContent.sender.username;
    var attachment;
    if (who == "adminha") {
        who = "me";
    }
    if (dialogContent.text.includes("pdf")) {
        attachment = "pdf";
    }
    var data = {who: who, attachment: attachment, content: dialogContent};
    console.log(data);
    return data;
}

export default DialogContentList;
