import React from "react";
import styles from "./index.module.css";

function Title(props) {
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.subtitle}>{props.subtitle}</p>
    </>
  );
}

export default Title;
