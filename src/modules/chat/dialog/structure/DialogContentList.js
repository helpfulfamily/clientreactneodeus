import React, {useEffect, useState} from 'react';
import DialogContent from "./DialogContent";
import {getToken} from "../../../user/process/LoginProcess";
import {getDialogContentsOut} from "../door/GetDialogContentsDoor";
import {appendDialogContentsOut} from "../door/AppendDialogContentsDoor";
import logger from "../../../../tool/log"
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {WebSocketHook} from "../../../../tool/websocket/action/WebSocketHook";


var isScrollBottom = false;

const DialogContentList = (props) => {
    let { receiverID } = useParams();
    const [pageNumber, setPageNumber] = useState(0);
    const userInformation = useSelector(state => state.userInformation);
    const dialogContents = useSelector(state => state.dialogContents);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(receiverID);
        if (typeof userInformation.sso != "undefined") {
            getOrAppendTokenAndThenContentList(pageNumber, false);

        }

    }, [receiverID]);

    useEffect(() => {

            toBottom();


    }, [dialogContents]);

    function listenScrollEvent() {
        var messageBody = document.querySelector('#content');
        var scrollBottonPos = messageBody.scrollHeight - messageBody.clientHeight;

        if (messageBody.scrollTop < scrollBottonPos) {
            isScrollBottom = false;

        } else if (messageBody.scrollTop == scrollBottonPos) {
            isScrollBottom = true;
        }

        if (messageBody.scrollTop == 0) {
            setPageNumber(pageNumber+1);
            getOrAppendTokenAndThenContentList(pageNumber, true);
        }
    }


    function getOrAppendTokenAndThenContentList(pageNumber, isAppend) {
            getToken(userInformation.sso.keycloak)

                .then((token) => {

                    if (isAppend) {
                        dispatch(appendDialogContentsOut(token, receiverID, pageNumber));
                    } else {
                        dispatch(getDialogContentsOut(token, receiverID, pageNumber));
                    }
                })
                .catch(function (hata) {

                    logger.error(hata)
                });
    }
   function toBottom() {
        const messageBody = document.querySelector('#content');

        messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    }

   function createData(dialogContent) {


        var who = dialogContent.sender.username;
        var attachment;
        if (who == "adminha") {
            who = "me";
        }
        if (typeof dialogContent.text!=="undefined" && dialogContent.text!==null && dialogContent.text.includes("pdf")) {
            attachment = "pdf";
        }
        var data = {who: who, attachment: attachment, content: dialogContent};
        console.log(data);
        return data;
    }


    return (
        <div className="content" id="content" onScroll={listenScrollEvent}>
            <div className="container">
                <div className="col-md-12">


                        {

                            dialogContents.map((dialogContent) => (

                                    <DialogContent data={createData(dialogContent)}/>

                            ))}


                </div>
            </div>
        </div>

    );


};

export default DialogContentList;
