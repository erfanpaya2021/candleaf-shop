import React from "react";
import Benefits from "../components/Benefits/Benefits";
import Products from "../components/Products/Products";
import Showcase from "../components/Showcase/Showcase";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Showcase />
      <Products />
      <Benefits />
      <Testimonials />
    </>
  );
};

export default Home;
