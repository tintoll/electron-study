"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactRouter = require("react-router");

var _Login = require("./Login");

var _Login2 = _interopRequireDefault(_Login);

var _Signup = require("./Signup");

var _Signup2 = _interopRequireDefault(_Signup);

var _Rooms = require("./Rooms");

var _Rooms2 = _interopRequireDefault(_Rooms);

var _Room = require("./Room");

var _Room2 = _interopRequireDefault(_Room);

var _firebaseBrowser = require("firebase/firebase-browser");

var _firebaseBrowser2 = _interopRequireDefault(_firebaseBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Routing 정의 하기
var appRouting = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
        _reactRouter.Route,
        { path: "/" },
        _react2.default.createElement(_reactRouter.Route, { path: "login", component: _Login2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: "signup", component: _Signup2.default }),
        _react2.default.createElement(
            _reactRouter.Route,
            { path: "Rooms", component: _Rooms2.default },
            _react2.default.createElement(_reactRouter.Route, { path: ":roomId", component: _Room2.default })
        )
    )
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
_firebaseBrowser2.default.initializeApp(config);

// Application 렌더링하기 
(0, _reactDom.render)(appRouting, document.getElementById("app"));