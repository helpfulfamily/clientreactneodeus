
export function dialogContentsHasErrored (state = false, action) {
    switch (action.type) {
        case 'DIALOG_CONTENTS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}


function isNeededToUpdateGui(receiverIDFromWebSocket, senderIDFromWebSocket) {
    var receiverID= window.location.pathname;
    receiverID = decodeURIComponent(receiverID);
    receiverID = receiverID.replace("\/dialogcontents\/", "");
    if (receiverIDFromWebSocket == receiverID || senderIDFromWebSocket == receiverID) {
        return true;
    }else{
        return false;
    }
}
export function dialogContentsReducer(state = [], action) {
    switch (action.type) {

        //Dialog içerisindeki mesajları getirir.


        case 'GET_DIALOG_CONTENTS':
            return action.dialogContents;

        //Chat ekranında scroll tavana değdikçe, bir önceki 10 mesajı getiren aksiyon.
        case 'APPEND_DIALOG_CONTENTS':{

            return   [


                ...action.dialogContents,
                ...state
            ]


        }

        //Mesaj yayınlayan aksiyon.
        case 'PUBLISH_DIALOG_CONTENT':{

            if (isNeededToUpdateGui(action.content.receiver.username, action.content.sender.username)) {
                return   [
                    ...state,
                    action.content,

                ]

            }else{

                return state;
            }
        }


        default:
            return state;
    }

}
