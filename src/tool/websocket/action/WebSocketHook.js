import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import {publishDialogContentIn} from "../../../modules/chat/dialog/door/PublishDialogContentDoor";
import logger from "../../log/index";
import {properties} from "../../../modules/common/config/properties";

var stompClient = null;


export function connectWebSocket(username) {
     return (dispatch) => {

        var socket = new SockJS(properties.notificationUrl);
        stompClient = Stomp.over(socket);
        const logInformation="A message arrived to this Websocket address:";

        stompClient.connect({}, function () {


            stompClient.subscribe('/topic/pushNotificationDialogContent', function (message) {
                logger.debug(logInformation, "/topic/pushNotificationDialogContent", message);
                dispatch(publishDialogContentIn(message));

            });



        });
     }
    }


