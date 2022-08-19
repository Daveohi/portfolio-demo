import React from "react";
import classes from "./ServicesList.module.css";
import ServicesArray from "./ServicesArray";
import ServiceCard from "../ServiceCard/ServiceCard";

const SkillsList = () => {
  return (
    <div className={classes.services_list}>
      {ServicesArray.map((service, i) => {
        const { icon, title } = service;
        return <ServiceCard key={i} icon={icon} title={title} />;
      })}
    </div>
  );
};

export default SkillsList;