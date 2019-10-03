import {combineReducers} from 'redux';
import {dialogContentsReducer, dialogContentsHasErrored} from "../../../modules/chat/dialog/reducer/DialogContentsReducer";
import {userInformationReducer} from '../../../modules/user/reducer/UserInformationReducer';

export default combineReducers({
    dialogContents: dialogContentsReducer,
    dialogContentsHasErrored,
    userInformation: userInformationReducer
 });
