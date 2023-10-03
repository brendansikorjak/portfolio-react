import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <div id="btnContainer">
        <Link style={{ textDecoration: 'none' }} className="btnHeader" to="/">
          HOME
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          className="btnHeader"
          to="/portfolio"
        >
          PORTFOLIO
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          className="btnHeader"
          to="/resume"
        >
          RESUME
        </Link>
        {/* <Link
          style={{ textDecoration: 'none' }}
          className="btnHeader"
          to="/contactme"
        >
          CONTACT ME
        </Link> */}
      </div>
    </header>
  );
}

export default Navbar;
