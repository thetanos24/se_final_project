import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/rh_logo.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img
            src={logo}
            alt="Rise and Hydrate logo"
            className="header__logo"
          />
        </Link>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <ToggleSwitch />
            </li>
            <li className="header__nav-item">
              <a href="/#about" className="header__nav-link">
                ABOUT
              </a>
            </li>
            <li className="header__nav-item">
              <Link to="/contact" className="header__nav-link">
                RH101
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/recipes" className="header__nav-link">
                RECIPES
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
