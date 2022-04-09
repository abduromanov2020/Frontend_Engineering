import React from "react";
import styles from "./index.module.css";

function Img(props) {
  return <img src={props.children} alt="" />;
}

export default Img;
