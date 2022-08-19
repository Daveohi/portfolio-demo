import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={classes.contact_info}>
      <h2 className={classes.title}>Contact Me</h2>
      <p>Here's how to reach me</p>
      <div className={classes.media}>
        <FontAwesomeIcon className={classes.icon} icon={faPhone} />
        <p>+234 705 975 2426</p>
      </div>
      <div className={classes.media}>
        <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
        <p>daveohimai@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;