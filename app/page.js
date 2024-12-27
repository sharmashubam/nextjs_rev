// import statements
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";


const Home = () => {
  return (
   <div>
    <Navbar  />
    <Projects />
    <Footer />
   </div>
  );
}

export default Home;