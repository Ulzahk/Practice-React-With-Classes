// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import Badge from "./components/Badge.jsx";

const element = <h1>Good Day, Platzi Badges!</h1>;

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <Badge
    avatarUrl="https://avatars.githubusercontent.com/u/46821988?v=4"
    firstName="Francisco"
    lastName="Suarez"
    jobTitle="Backend Developer"
    twitter="Ulzahk"
  />,
  container
);
