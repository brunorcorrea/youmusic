import './styles.css';
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export default function NavBar(){
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <Link to="/" className="logoStyle">You Music</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/musicplayer" className="linkStyles">Music Player</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/videoplayer" className="linkStyles">Video Player</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  );
}