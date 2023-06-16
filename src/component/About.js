import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("About Contructor");
  }
  componentDidMount() {
    console.log("About Component did Mount");
  }
  render() {
    console.log("About render");
    return (
      <>
        <h1>About Class Component</h1>
        <div className="user-card">
          <User name={"Vicky Sharma"} address={"New Delhi-110086 (INDIA)"} />
        </div>
        <div className="user-card">
          <UserClass
            name={"Ravi Sharma"}
            address={"New Delhi-110042 (INDIA)"}
          />
        </div>
      </>
    );
  }
}

// const About = () => {
//   return (
//     <>
//       <h1>About</h1>
//       {/* <div className="user-card">
//         <User name={"Vicky Sharma"} address={"New Delhi-110086 (INDIA)"} />
//       </div> */}
//       <div className="user-card">
//         <UserClass name={"Ravi Sharma"} address={"New Delhi-110042 (INDIA)"} />
//       </div>
//     </>
//   );
// };

export default About;
