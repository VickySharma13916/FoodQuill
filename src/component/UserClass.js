import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }
  componentDidMount() {
    console.log("child Component did Mount");
    //API Call after render the component
  }
  render() {
    const { name, address } = this.props;
    //Never update state variable directly
    const { count } = this.state;
    console.log("render");
    return (
      <>
        <h2>{name}</h2>
        <h3>Profession:- Software Engineer</h3>
        <h3>Contact:- 7678410858</h3>
        <h3>Email Id:- VickySharma13916@gmail.com</h3>
        <h3>Address:- {address}</h3>
        <h3>Count :- {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Update Count
        </button>
      </>
    );
  }
}

export default UserClass;
