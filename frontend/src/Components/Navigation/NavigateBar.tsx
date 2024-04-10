import { Form, Nav, Navbar, NavDropdown, Container, Button, Image } from 'react-bootstrap';
import './NavigateBar.css';
import logo from '../../Assets/takeoff.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import FAIcon from '../PrintFAIcon';


function NavigateBar() {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}><Image className='NavbarLogoImage' src={logo} /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll">
          <Nav navbarScroll>
            <Nav.Link as={Link} to={""} className='NavLink'><FAIcon size='lg' iconName={faUser} color='white' /> Site1</Nav.Link>
            <Nav.Link as={Link} to={""} className='NavLink'><FAIcon size='lg' iconName={faUser} color='white' /> Site2</Nav.Link>
            <Nav.Link as={Link} to={""} className='NavLink'> <FAIcon size='lg' iconName={faUser} color='white' /> Site3</Nav.Link>
            <Nav.Link as={Link} to={""} className='NavLink'> <FAIcon size='lg' iconName={faUser} color='white' /> Site4</Nav.Link>
            <Nav.Link as={Link} to={""} className='NavLink'> <FAIcon size='lg' iconName={faUser} color='white' /> Site5</Nav.Link>
          </Nav>
          <Nav.Link as={Link} to={"/login_register"} className="NavLink1"> Sign in</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );                  
}

export default NavigateBar;