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
    <Container fluid={true}>
      <h1 className="mt-3">About</h1>
      <Row>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <UserClass name={"ravi35663"} />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <UserClass name={"JAY9039"} />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <User name={"Vickysharma13916"} />
        </Col>
        <Col xs={12} md={6} lg={3} className="mb-3">
          <User name={"akshaymarch7"} />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
