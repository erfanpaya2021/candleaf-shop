import classes from "./ProductsList.module.css";

const ProductsList = ({ products }) => {
  return <div className={classes["products-list"]}>{products}</div>;
};

export default ProductsList;
