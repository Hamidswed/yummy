import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./NavBarMain.css";

const NavBarMain = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Logo className="logo" />
      </div>
      <div className="navbar-menu">
        <nav>
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            <Link to="/recipe" style={{ textDecoration: "none" }}>
              <li>Recipe</li>
            </Link>
            <Link to="/favorite" style={{ textDecoration: "none" }}>
              <li>Favorite</li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default NavBarMain;
