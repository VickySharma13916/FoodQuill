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

//2nd component
import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// Flow  => (React.createElement =>Js Object => HTML Element(render))
// This is core react element for create react element
const App = React.createElement("h1", { id: "heading" }, "Namaste React");

// jsx => javascript syntax which is easier to create react element
// jsx is not a part of react. It is used to easily create the react element for developers.
// jsx is not html inside js. It is only html like syntax or like(xml) syntax.
// this is JSX for create react element
// jsx (transpile this code before it reaches the JS Engine) and transpiled by the Parcel package - Bable(convert JSX into HTML )
// JSX (code) => Parcel(Transpiled before the JS) => Babel(convert JSX into HTML) => React.createElement => JS Object => HTML Element(render)
// Flow => (JSX => React.createElement => JS Object => HTML Element(render))
// Wrapping JSX for multiple element in paranthesis () is basically to understand Bable to where the JSX start and where end.
//jsx take care of the injection attack in our system

// React function Component
//component Composition is just rendering a component to an another Component.
//crossite scripting attack prevent by the JSX which is in this {code}.
const data = 1000;
const Title = () => <h1>Vicky Sharma</h1>;
const HeadingComponent = () => {
  return (
    //React Fragment -> It behaves like an empty tag by React
    //<></> empty tag by jsx this is the short hand for the React.Fragment
    <>
      <div className="container">
        <h1 className="heading">Namaste React</h1>
        <Title></Title>
        {Title()}
        <Title />
      </div>
      <div id="container">
        {Title()}
        <Title />
      </div>
    </>
  );
};
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeadingComponent />);
