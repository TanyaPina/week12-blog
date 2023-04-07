import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/BlueTechtonicaWord.png'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"

function MyNavBar(props) {

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={Logo}
              height="30"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav.Link to="/"className="nav-link">
          Home
        </Nav.Link>

        <Nav.Link to="aboutme"className="nav-link">
        About Me
      </Nav.Link>
      <Nav.Link to="api/students"className="nav-link">
      Blogs
      </Nav.Link>
      <Nav.Link >Your Link</Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Cristina Rodriguez</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container >
    </Navbar >
    </>
  );
};

export default MyNavBar;