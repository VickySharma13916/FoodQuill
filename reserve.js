//This File is only for the future references

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { class: "one" }, [
    React.createElement("h1", { id: "child1" }, "I am a child 1"),
    React.createElement("h2", { id: "child2" }, "I am a child 2"),
  ]),
  React.createElement("div", { class: "two" }, [
    React.createElement("h1", { id: "child1" }, "I am a child 1"),
    React.createElement("h2", { id: "child2" }, "I am a child 2"),
  ]),
]);
// React.createElement has three argument.
// React.createElement('h1',{id="heading"},'child');
// 1. name if the tag.
// 2. Attributes of the tag.
// 3. A normal react element or if you give multiple children then pass in the array.
//heading is a object (ReactElement is an object.)
const root = ReactDOM.createRoot(document.getElementById("root"));
// root ReactDOM.createRoot basically create the root for root id element. assign the root in react app
root.render(heading);
//root.render basically replace the existing data inside the root id element in index.js file.
//React is a library and it can be applied on small portion of the app.
