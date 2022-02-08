import CartIcon from "./CartIcon";

import logo from "../../assets/images/icon.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__container}>
        <div className={classes.navbar__logo}>
          <img src={logo} alt="candleaf" />
          <span> شمع برگ</span>
        </div>
        <div className={classes["navbar__cart-icon"]}>
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
