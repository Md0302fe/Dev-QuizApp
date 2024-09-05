import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import NavDropdown from "react-bootstrap/NavDropdown";

import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // chuyển tới đâu thì dùng navigate ('Link')
    navigate("/Login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to={"/"} className="navbar-brand">
          {" "}
          MinhDuc.Dev
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/users"} className="nav-link">
              User
            </NavLink>
            <NavLink to={"/admins"} className="nav-link">
              Admin
            </NavLink>
          </Nav>
          {/* log */}
          <Nav>
            <button className="btn-login" onClick={() => handleLogin()}>
              Log in
            </button>
            <button className="btn-signup">Sing up</button>

            {/* <NavDropdown
              title="Settings"
              id="basic-nav-dropd
            own"
            >
              <NavDropdown.Item>Log in</NavDropdown.Item>
              <NavDropdown.Item>User info</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Log out</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
