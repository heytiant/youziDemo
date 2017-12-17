

import {render}  from "react-dom";

import RouterCom from "./router";

var app =document.getElementById("app");



require("../less/ba.less");
require("../less/home.less");
require("../less/login.less");
require("../less/register.less");

require("../less/temaiBanner.less");

render(<RouterCom />,app);