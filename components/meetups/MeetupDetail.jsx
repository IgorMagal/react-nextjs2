import React from "react";
import styles from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={styles.detail}>
      <h2>MeetUpDetailsPage</h2>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
