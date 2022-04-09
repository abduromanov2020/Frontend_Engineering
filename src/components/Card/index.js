import React from "react";
import styles from "./index.module.css";

function Card(props) {
  const { status, total, detail } = props;

  return (
    <div className={styles.card}>
      <a href={detail} target="_blank">
        <h4 className={styles.status}>{status}</h4>
        <h2>{total.toLocaleString()}</h2>
      </a>
    </div>
  );
}

export default Card;
