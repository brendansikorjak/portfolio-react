import logo from '../assets/react.svg';

function Navbar() {
  return (
    <header>
      <div id="logoContainer">
        <img src={logo} alt={logo} id="logo"></img>
      </div>
      <div id="btnContainer">
        <a className="btnHeader" href="/">
          About Me
        </a>
        {/* <a className="btnHeader" href="/portfolio">
          Portfolio
        </a>
        <a className="btnHeader" href="/resume">
          Resume
        </a>
        <a className="btnHeader" href="/contactme">
          Contact Me
        </a> */}
      </div>
    </header>
  );
}

export default Navbar;
