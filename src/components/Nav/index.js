import React from "react";
import styles from "./index.module.css";

function Nav(props) {
  return (
    <>
      <li>
        <a href="/">{props.children}</a>
      </li>
    </>
  );
}

export default Nav;
