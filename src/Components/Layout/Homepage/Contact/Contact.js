import React from 'react'
import classes from "./Contact.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <div>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact