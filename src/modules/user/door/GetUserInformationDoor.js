import {getUserInformationAction} from "../action/GetUserInformationAction";

import {properties} from "../../common/config/properties";
import axios from "axios";
import {createUser} from "../process/UserCreationProcess";
import logger from "../../../tool/log"


export function getUserInformationOut(userInformation) {
    return (dispatch) => {
        var headers = {

            'Content-Type': 'application/json',

        };

        var url = properties.serverUrl + properties.user + properties.get_userinformation + "/" + userInformation.sso.username;


        var log = {
            action: "GET_USER_INFORMATION"
            , information: "getUserInformationOut(userInformation)"

            , "userInformation": userInformation

        };
        logger.debug(log);


        axios.get(url, {headers: headers})
            .then((response) => {
                if (response.data !== "") {

                    // Servisten dönen userInformation ile temel kullanıcı bilgilerini harmanlıyor.
                    var sso = userInformation.sso;
                    userInformation = response.data;
                    userInformation.sso = sso;
                } else {
                    createUser(userInformation.sso);

                }

                dispatch(getUserInformationIn(userInformation));


            });
    }
}

export function getUserInformationIn(userInformation) {

    var log = {
        action: "GET_USER_INFORMATION"
        , information: "getUserInformationIn(userInformation)"


    };
    logger.debug(log);

    const action = getUserInformationAction(userInformation);
    return action;

}
