import { Link } from "react-router-dom";
import CartItem from "../../components/Cart/CartItem";
import Button from "../../components/Utils/Button/Button";

import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={classes.cart}>
      <h2>سبد خرید شما</h2>
      <Link to="/">بازگشت به فروشگاه</Link>

      <table className={classes.cart__table}>
        <thead>
          <tr>
            <th>محصول</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>قیمت کل</th>
          </tr>
        </thead>
        <tbody>
          <CartItem
            id={1}
            title="شمع 1"
            image="product-1.png"
            price={10000}
            quantity={1}
            totalPrice={10000}
          />
        </tbody>
      </table>

      <div className={classes.cart__checkout}>
        <h3>قیمت کل سبد : 10000 تومان</h3>
        <Button>پرداخت وجه</Button>
      </div>
    </div>
  );
};

export default Cart;
