import React from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupDetail = (props) => {
  return (
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <br />
        <div>{props.description}</div>
      </div>
    </Card>
  );
};

export default MeetupDetail;
