import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../../components/Cart/CartItem";
import Button from "../../components/Utils/Button/Button";

import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItemsElement = cartItems.map((item) => (
    <CartItem key={item.id} {...item} />
  ));

  const checkOutIsDisable = !!!cartItems.length;

  return (
    <section className={classes.cart}>
      <h2>سبد خرید شما</h2>
      <Link to="/">بازگشت به فروشگاه</Link>

      <table
        className={classes.cart__table}
        style={{ paddingBottom: `${checkOutIsDisable && "3rem"}` }}
      >
        <thead>
          <tr>
            <th>محصول</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>قیمت کل</th>
          </tr>
        </thead>
        <tbody>{cartItemsElement}</tbody>
      </table>

      <div className={classes.cart__checkout}>
        <h3>قیمت کل سبد : {totalAmount} تومان</h3>
        <Button disabled={checkOutIsDisable}>پرداخت وجه</Button>
      </div>
    </section>
  );
};

export default Cart;
