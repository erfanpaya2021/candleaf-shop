import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartIcon from "./CartIcon";
import logo from "../../assets/images/icon.png";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__container}>
        <div onClick={() => navigate("/")} className={classes.navbar__logo}>
          <img src={logo} alt="candleaf" />
          <span> شمع برگ</span>
        </div>
        <div
          onClick={() => navigate("/cart")}
          className={classes["navbar__cart-icon"]}
        >
          <CartIcon />
          <span className={classes.navbar__quantity}>{totalQuantity}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
