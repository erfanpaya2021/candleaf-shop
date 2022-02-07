import React from "react";
import Benefits from "../components/Benefits/Benefits";
import Products from "../components/Products/Products";
import Showcase from "../components/Showcase/Showcase";

const Home = () => {
  return (
    <>
      <Showcase />
      <Products />
      <Benefits />
    </>
  );
};

export default Home;
