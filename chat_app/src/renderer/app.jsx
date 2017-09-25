import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./Room";

import firebase from "firebase/firebase-browser";

// Firebase 초기화
const config = {
  
};
firebase.initializeApp(config);

// Routing 정의
const appRouting = (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      <Route path="rooms" component={Rooms}>
        <Route path=":roomId" component={Room} />
      </Route>
    </Route>
  </Router>
);

// Routing 초기화
if (!location.hash.length) {
  location.hash = "#/login";
}

// Application을 rendering하기
render(appRouting, document.getElementById("app"));
