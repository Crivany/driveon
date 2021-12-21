import React, { useState, useEffect } from "react";
import Cover from "./components/cover/Cover";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "../../Components/footer/Footer";
import NavbarHome from "../../Components/Navigation/NavbarHome/NavbarHome";

function Blog() {

  return (
    <div className="App">
      <NavbarHome />
      <Cover />
      <About />
      <Slider />
      <Footer />
    </div>
  );
}

export default Blog;
