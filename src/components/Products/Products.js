import { data } from "./data";

import ProductsList from "./ProductsList";
import ProductCart from "./ProductCard";
import classes from "./Products.module.css";
import SectionHeader from "../Utils/SectionHeader/SectionHeader";

const Products = () => {
  const products = data.map((item) => <ProductCart key={item.id} {...item} />);

  return (
    <section className={classes.products}>
      <SectionHeader
        title="محصولات"
        subtitle="برای خودتان یا عزیزانتان سفارش دهید"
      />

      <ProductsList products={products} />
    </section>
  );
};

export default Products;
