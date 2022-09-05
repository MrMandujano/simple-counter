//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let num = 0;

setInterval(() => {
    let dig1 = num % 10;
    let dig2 = (num % 100 - num % 10) / 10;
    let dig3 = (num % 1000 - num % 100) / 100;
    let dig4 = (num % 10000 - num % 1000) / 1000;
    let dig5 = (num % 100000 - num % 10000) / 10000;
    let dig6 = (num % 1000000 - num % 10000) / 10000;
    console.log(`${dig6}:${dig5}:${dig4}:${dig3}:${dig2}:${dig1}`);
    ReactDOM.render(<Home dig1={dig1} dig2={dig2} dig3={dig3} dig4={dig4} dig5={dig5} dig6={dig6}  />, document.querySelector("#app"));
    num++;
}, 1000);
//render your react application

