// src/components/NavBar.tsx
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/TestLogo.png";
import icon1 from "../assets/home_FILL0_wght300_GRAD0_opsz24.png";
import icon2 from "../assets/group_FILL0_wght300_GRAD0_opsz24.png";
import icon3 from "../assets/credit_card_FILL0_wght300_GRAD0_opsz24.png";
import icon4 from "../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.png";
import icon5 from "../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.png";
import icon6 from "../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import icon7 from "../assets/more_vert_FILL0_wght300_GRAD0_opsz24.png";
import icon8 from "../assets/settings_FILL0_wght300_GRAD0_opsz24.png";

const NavBar: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      className="px-5 styled-nav align-items-center justify-content-center"
    >
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" style={{ height: "48px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/" className="styled-navlink ">
            <img src={icon1} alt="Overview Icon" className="nav-icon mx-2" />
            Overview
          </Nav.Link>
          <Nav.Link
            href="/about"
            className="styled-navlink active-link text-center mb-0"
          >
            <img src={icon2} alt="Patients Icon" className="nav-icon mx-2" />
            Patients
          </Nav.Link>
          <Nav.Link href="/services" className="styled-navlink">
            <img src={icon3} alt="Schedule Icon" className="nav-icon mx-2" />
            Schedule
          </Nav.Link>
          <Nav.Link href="/contact" className="styled-navlink">
            <img src={icon4} alt="Message Icon" className="nav-icon mx-2" />
            Message
          </Nav.Link>
          <Nav.Link href="/contact" className="styled-navlink">
            <img src={icon5} alt="Transaction Icon" className="nav-icon mx-2" />
            Transaction
          </Nav.Link>
        </Nav>
        <div className="person-logo mx-2">
          <img src={icon6} alt="Person Icon" className="person-icon" />
          <div className="person-text">
            <h5>Dr. Jose Simmons</h5>
            <p>General Practitioner</p>
          </div>
          <div className="divider"></div>
          <img src={icon8} alt="" className="mx-2" style={{ height: "20px" }} />
          <img src={icon7} alt="" className="mx-2" style={{ height: "20px" }} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
