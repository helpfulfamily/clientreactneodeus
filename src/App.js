import React from 'react';
import DialogFrame from "./modules/chat/dialog/structure/DialogFrame";
import {Route, Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import configureStore from './tool/store/configureStore.js';

export const store = configureStore();

function App() {
  return (
      <Provider store={store}>
        <Switch>
          <Route  path="/" component={DialogFrame}/>
        </Switch>
      </Provider>


  );
}

export default App;
