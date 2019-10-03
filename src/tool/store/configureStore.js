import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../datamanagement/reducers';

export default function configureStore(initialState) {

    var store= createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );

    return store;
}
