import React from "react";
import Button from "../../../UI/Button/Button";
import classes from "./About.module.css"; 
import profilePic from "../About/David-Ohimai.jpg";

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.img}>
        <img src={profilePic} alt="" />
      </div>

      <div className={classes.container}>
        <h2 className={classes.title}>About Me</h2>
        <p className={classes.content}>
          David Ohimai is a Junior Software Developer with Fundamental skills in
          design, installation, testing and maintenance of software systems.
          Equipped with a diverse and promising skill-set. Familiar with various
          platforms, languages with cutting-edge development tools and
          procedures. Able to effectively self-manage during independent
          projects, as well as collaborate as part of a productive team.
        </p>
        <div className={classes.actions}>
            <Button className={classes.button}>Download CV</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
