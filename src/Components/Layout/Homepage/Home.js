import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Services from "./Services/Services";
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer";


const Home = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default Home;
