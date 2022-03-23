import React from "react";
import Anno from "../components/Anno";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slid from "../components/Slid";

const Home = () => {
  return (
    <div>
      <Anno />
      <Navbar />
      <Slid />
      <Categories />
      <Products />
      <Newsletter />
      <Footer/>
    </div>
  );
};

export default Home;
