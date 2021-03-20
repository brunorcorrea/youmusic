// import './styles.css';
// import Logo from '../../images/logo.svg';
// import SandwichIcon from "../../images/sandwich-icon.svg";
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export default function NavBar(){
  // function openSandwichMenu(){
    
  // }

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand>
        <Link to="/">YM</Link>
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

// <nav className="navBarContainer">
    //   <div>
    //     <Link to="/"> 
    //       <img src={ Logo } alt="Logo"/> 
    //     </Link>
    //   </div>
    //   <div className="divLink">
    //     <Link to="/musicplayer" className="linkStyles">Music Player</Link>
    //   </div>
    //   <div className="divLink">
    //     <Link to="/videoplayer" className="linkStyles">Video Player</Link>
    //   </div>
    //   <div className="divButton">
    //     <button className="sandwichButton" onClick={openSandwichMenu}>
    //       <img src={SandwichIcon} alt="Menu Sanduíche" id="sandwichImage"/>
    //     </button>
    //   </div>
    // </nav>