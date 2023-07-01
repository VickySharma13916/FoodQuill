import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Col, Container, Row } from "react-bootstrap";

// class About extends Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {}
//   render() {
//     return (
//       <>
//         <h1>About Class Component</h1>
//         <Row>
//           <Col>
//             <UserClass />
//           </Col>
//           <Col>
//             <User />
//           </Col>
//         </Row>
//       </>
//     );
//   }
// }

// DOM rendering is happening in a single batch on mounting phase
// -Parent constructor
// -parent render
//   -1st constructor
//   -1st render
//   -2nd constructor
//   -2nd render

//    DOM manupulation is happening in a single batch
//   -1st component did mount
//   -2nd component did mount
// -parent component did mount

const About = () => {
  return (
    <div className="my-4 flex flex-wrap gap-4 p-4">
      <div className="flex-grow w-64">
        <UserClass name={"ravi35663"} />
      </div>
      <div className="flex-grow w-64">
        <UserClass name={"JAY9039"} />
      </div>
      <div className="flex-grow w-64">
        <User name={"Vickysharma13916"} />
      </div>
      <div className="flex-grow w-64">
        <User name={"akshaymarch7"} />
      </div>
    </div>
  );
};

export default About;
