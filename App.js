import React from "react";
import ReactDOM from "react-dom/client";

//Flow  => (React.createElement =>Js Object => HTML Element(render))
//This is core react element for create react element
const App = React.createElement("h1", { id: "heading" }, "Namaste React");

//jsx => javascript syntax which is easier to create react element
//jsx is not a part of react. It is used to easily create the react element for developers.
//jsx is not html inside js. It is only html like syntax or like(xml) syntax.
//this is JSX for create react element
//jsx (transpile this code before it reaches the JS Engine) and transpiled by the Parcel package - Bable(convert JSX into HTML )
//JSX (code) => Parcel(Transpiled before the JS) => Babel(convert JSX into HTML) => React.createElement => JS Object => HTML Element(render)
// Flow => (JSX => React.createElement => JS Object => HTML Element(render))
//Wrapping JSX for multiple element in paranthesis () is basically to understand Bable to where the JSX start and where end.

const jsx = <h1 className="heading">Namaste React</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsx);
