import logo from '../../logo.svg'
import './Header.css'

function Header(props) {
  return (
    <header className="Header-header">
      <img src={logo} className="Header-logo" alt="logo" />
      <p>Fallout Terminal Cracker v{props.version}</p>
    </header>
  );
}

export default Header;

