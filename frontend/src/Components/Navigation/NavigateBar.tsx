import { Form, Nav, Navbar, NavDropdown, Container, Button, Image } from 'react-bootstrap';
import './NavigateBar.css';
import logo from '../../Assets/takeoff.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope, faUser } from '@fortawesome/free-solid-svg-icons'


function NavigateBar() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand href="#"><Image className='NavbarLogoImage' src={logo} /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            navbarScroll
           
          >
            <Nav.Link className='NavLink' href="#Site1"><FontAwesomeIcon className='NavBarIcon' size="lg" icon={faEarthEurope} /> Site1</Nav.Link>
            <Nav.Link className='NavLink' href="#Site2"><FontAwesomeIcon className='NavBarIcon' size="lg" icon={faEarthEurope} /> Site2</Nav.Link>
            <Nav.Link className='NavLink' href="#Site3"><FontAwesomeIcon className='NavBarIcon' size="lg" icon={faEarthEurope} /> Site3</Nav.Link>
            <Nav.Link className='NavLink' href="#Site4"><FontAwesomeIcon className='NavBarIcon' size="lg" icon={faEarthEurope} /> Site4</Nav.Link>
            <Nav.Link className='NavLink' href="#Site5"><FontAwesomeIcon className='NavBarIcon' size="lg" icon={faEarthEurope} /> Site5</Nav.Link>
          </Nav>
          <Nav.Link className="NavLink1" href="#NavLink"><FontAwesomeIcon className='NavBarIcon' size="lg" icon={faUser} /> Sign in</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigateBar;