import React from "react";
import 'babel-polyfill';
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.scss";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
