import { useDispatch } from "react-redux";

import { addItem } from "../../store/rootActions";

import Button from "../Utils/Button/Button";
import classes from "./ProductCard.module.css";

const ProductCard = ({ id, title, price, image }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const tempItem = {
      id,
      title,
      price,
      image,
      quantity: 1,
      totalPrice: price,
    };

    dispatch(addItem(tempItem));
  };

  return (
    <div className={classes.card}>
      <div className={classes.card__image}>
        <img src={require(`../../assets/images/products/${image}`)} alt="" />
      </div>
      <div className={classes.card__content}>
        <h3>{title}</h3>
        <p>{price} تومان</p>
      </div>
      <div className={classes.card__actions}>
        <Button onClick={handleAddItem}>افزودن به سبد </Button>
      </div>
    </div>
  );
};

export default ProductCard;
