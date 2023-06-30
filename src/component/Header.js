import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  const [login, setLogin] = useState(true);
  const online = useOnlineStatus();
  //If their is no dependency array in useEffect component called in every rendered
  //If empty dependency array is put it in the useEffect than it called in first or initial render(just once)
  //If their is some variable or state in depencencies array than it called when state is updated ([login] => it will render when login is update)
  // useEffect(() => {
  //   console.log("Useeffect called");
  // }, []);
  return (
    <Navbar expand="lg" className="nav_bar_box">
      <Container style={{ maxWidth: "100%", padding: "0 1.25rem" }}>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              loading="lazy"
              width={60}
              height={60}
              className="img-fluid"
              alt="Brandlogo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {/* <Nav.Link>
              <div>Online Status :- {online ? "online" : "offline"}</div>
            </Nav.Link> */}
            <Nav.Link>
              <Link to="/">
                <div>Home</div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">
                <div>About Us</div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">
                <div>Contact Us</div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/cart">
                <div>Cart</div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/grocery">
                <div>Grocery</div>
              </Link>
            </Nav.Link>
            <div className="login" onClick={() => setLogin(!login)}>
              {login ? "Login" : "Logout"}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
