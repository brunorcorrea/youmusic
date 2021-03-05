import './styles.css';
import Logo from '../../images/logo.svg';
import SandwichIcon from "../../images/sandwich-icon.svg";
import { Link } from 'react-router-dom';

export default function NavBar(){
  function openSandwichMenu(){

  }

  return (
    <nav className="navBarContainer">
      <div>
        <Link to="/"> 
          <img src={ Logo } alt="Logo"/> 
        </Link>
      </div>
      <div className="divLink">
        <Link to="/musicplayer" className="linkStyles">Music Player</Link>
      </div>
      <div className="divLink">
        <Link to="/videoplayer" className="linkStyles">Video Player</Link>
      </div>
      <div>
        <button className="sandwichButton" onClick={openSandwichMenu}>
        </button>
        <img src={SandwichIcon} alt="Menu Sanduíche" id="sandwichImage"/>
      </div>
    </nav>
  );
}