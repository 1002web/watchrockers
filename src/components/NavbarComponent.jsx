import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.jpg';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={logo} alt="logo" style={{width: '60px', height: '60px', borderRadius: 40, marginRight: 15}} />
        <Navbar.Brand href="#home" style={{fontWeight:700}}>Watch'Rockers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Bio</Nav.Link>
            <Nav.Link >Concerts</Nav.Link>
            <Nav.Link >Media</Nav.Link>
            <Nav.Link >Book us</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;