import { data } from "./data";

import ProductsList from "./ProductsList";
import ProductCart from "./ProductCard";
import classes from "./Products.module.css";

const Products = () => {
  const products = data.map((item) => <ProductCart key={item.id} {...item} />);

  return (
    <section className={classes.products}>
      <h2 className={classes.products__title}>محصولات</h2>
      <p className={classes.products__subtitle}>
        برای خودتان یا عزیزانتان سفارش دهید
      </p>

      <ProductsList products={products} />
    </section>
  );
};

export default Products;
