import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { RecipeType } from "../../App";
import "./NavBarMain.css";

type PropType = {
  favorite: RecipeType[];
};

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: -4,
    top: -6,
    padding: "0 4px",
  },
}));

const NavBarMain = ({ favorite }: PropType) => {
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
              <StyledBadge badgeContent={favorite.length} color="warning">
                <li>Favorite</li>
              </StyledBadge>
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
