import classes from "./CartItem.module.css";

const CartItem = ({ id, title, image, price, quantity, totalPrice }) => {
  return (
    <tr className={classes.card}>
      <td>
        <img src={require(`../../assets/images/products/${image}`)} alt="" />
        <div className={classes.card__content}>
          <h3>{title}</h3>
          <span>Remove</span>
        </div>
      </td>
      <td>{price} تومان </td>
      <td className={classes.card__actions}>
        <span>+</span> {quantity}
        <span> - </span>
      </td>
      <td>{totalPrice}</td>
    </tr>
  );
};

export default CartItem;
