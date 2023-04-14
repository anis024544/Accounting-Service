import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        // style={{ backgroundColor: "rgb(0, 156, 134)" }}
        style={{ backgroundColor: "rgb(22,25,59)" }}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="/">
          {" "}
          <img style={{ width: "40px", marginLeft: "20px" }} src="" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Link className="js mx-3 text-light text-decoration-none" to="/">
              Home
            </Link>
           
            <Nav.Link
              className=" px-2 mx-3 text-light text-decoration-none"
              href="#service"
            >
              Services
            </Nav.Link>

            <Nav.Link
              className=" px-2 mx-3 text-light text-decoration-none"
              href="#aboutUs"
            >
              About us
            </Nav.Link>
            <Nav.Link
              className=" px-2 mx-3 text-light text-decoration-none"
              href="#review"
            >
              Review
            </Nav.Link>
            <Link
              className="px-2 mx-3 text-light text-decoration-none"
              to="/dashboard/profile"
            >
              Dashboard
            </Link>
            <Nav.Link className=" text-light text-decoration-none p-0 m-0" >
            </Nav.Link>
            <Link className="px-2 mx-3 text-light text-decoration-none"  to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
