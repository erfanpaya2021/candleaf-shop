import { useDispatch } from "react-redux";

import { addItem, removeItem, fullyRemoveItem } from "../../store/root-actions";

import classes from "./CartItem.module.css";

const CartItem = ({ id, title, image, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const tempItem = {
      id,
      title,
      price,
      image,
      quantity,
      totalPrice,
    };

    dispatch(addItem(tempItem));
  };

  const handleRemoveItem = () => dispatch(removeItem(id));

  const handleFullyRemoveItem = () => dispatch(fullyRemoveItem(id));

  return (
    <tr className={classes.card}>
      <td>
        <img
          src={require(`../../assets/images/products/${image}`)}
          alt={title}
          loading="lazy"
        />
        <div className={classes.card__content}>
          <h3>{title}</h3>
          <span onClick={handleFullyRemoveItem}>Remove</span>
        </div>
      </td>
      <td>{price} تومان </td>
      <td className={classes.card__actions}>
        <span onClick={handleAddItem}>+</span> {quantity}
        <span onClick={handleRemoveItem}> - </span>
      </td>
      <td>{totalPrice} تومان</td>
    </tr>
  );
};

export default CartItem;
