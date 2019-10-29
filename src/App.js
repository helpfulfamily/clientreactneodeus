import React from 'react';
import {Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from './tool/store/configureStore.js';
import {SuspenseWithPerf, useUser} from "reactfire";
import AuthButton from "./modules/user/structure/Auth";
import FirstInterface from "./modules/common/structure/FirstInterface";

export const store = configureStore();

function App() {
    const user = useUser();

    var appContent = "";

    if (!user) {
        appContent = <AuthButton/>
    } else {
        appContent = <FirstInterface user={user}/>
    }
    return (

      <Provider store={store}>
        <Switch>
            {appContent}
        </Switch>
      </Provider>

  );
}

const SuspenseWrapperApp = props => {
    return (
        <SuspenseWithPerf fallback="loading..." traceId="RTDB-root">
            <App/>
        </SuspenseWithPerf>
    );
};

export default SuspenseWrapperApp;

