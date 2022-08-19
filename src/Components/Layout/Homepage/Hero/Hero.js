import React from "react";
import Button from "../../../UI/Button/Button";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <h4>Hello</h4>
      <h3>I'm David Ohimai</h3>
      <p>A Junior Software Developer</p>
      <Button>Click to Download CV</Button>
    </section>
  );
};

export default Hero;