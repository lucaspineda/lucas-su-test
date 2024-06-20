import './App.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <header className='main-header'>
        <nav className='main-header-nav'>
          <ul className='main-header-nav-ul'>
            <li>
              <Link to='/profile'>
                Profile
              </Link>
            </li>
            <li>
              <Link to='/history'>
                History
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Navbar;