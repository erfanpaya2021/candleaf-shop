import React from "react";
import classes from "./ProductCard.module.css";

const ProductCard = ({ id, title, price, image }) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__image}>
        <img src={require(`../../assets/images/${image}`)} alt="" />
      </div>
      <div className={classes.card__content}>
        <h3>{title}</h3>
        <p>{price} تومان</p>
      </div>
    </div>
  );
};

export default ProductCard;
