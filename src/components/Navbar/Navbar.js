import CartIcon from "./CartIcon";

import logo from "../../assets/images/icon.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <span>
        <img src={logo} alt="candleaf" />
      </span>
      <span className={classes["navbar__cart-icon"]}>
        <CartIcon />
      </span>
    </nav>
  );
};

export default Navbar;
