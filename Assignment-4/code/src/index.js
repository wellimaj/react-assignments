import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Postview from "./Postview";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header"
fetch("http://localhost:3004/user") //1
  .then((response) => response.json()) //2
  .then((res) => {
    ReactDOM.render(
      <React.StrictMode>
        <Header></Header>
        <Postview res={res} />
      </React.StrictMode>,
      document.getElementById("root")
    ); //3
  });




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
