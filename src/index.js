import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {FirebaseAppProvider} from 'reactfire';
import 'firebase/performance';

const firebaseConfig = {
    apiKey: "AIzaSyB4I8WMEjtaiorSLBwYelykA-hgxQ1YEE4",
    authDomain: "neodeus-41a60.firebaseapp.com",
    databaseURL: "https://neodeus-41a60.firebaseio.com",
    projectId: "neodeus-41a60",
    storageBucket: "neodeus-41a60.appspot.com",
    messagingSenderId: "627141864837",
    appId: "1:627141864837:web:8e00681ae724910bb7a8ec",
    measurementId: "G-DGSEBN67DY"
};

ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FirebaseAppProvider>
   ,
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
