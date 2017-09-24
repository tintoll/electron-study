import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory} from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./Room";
import firebase from "firebase/firebase-browser";

// Routing 정의 하기
const appRouting = (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="login" component={Login}></Route>
            <Route path="signup" component={Signup}></Route>
            <Route path="Rooms" component={Rooms}>
                <Route path=":roomId" component={Room} />
            </Route>
        </Route>
    </Router>    
);

// Routing 초기화
if (!location.hash.length) {
    location.hash = "#/login";
}

// Filebase 초기화하기
var config = {
    apiKey: "apikey",
    authDomain: "electron-chat-yyyy.firebaseapp.com",
    databaseURL: "https://electron-chat-yyyy.firebaseio.com",
    projectId: "electron-chat-yyyy",
    storageBucket: "electron-chat-yyyy.appspot.com",
    messagingSenderId: "id"
};
firebase.initializeApp(config);

// Application 렌더링하기 
render(appRouting, document.getElementById("app"));