import React from "react";
import data from "../../utils/constants/indonesia";
import Card from "../Card";
import Title from "../Title";
import styles from "./index.module.css";

function Global() {
  return (
    <div className={styles.container}>
      <div className={styles.global}>
        <div className={styles.global__title}>
          <Title title="Indonesia" />
          <Title subtitle="Data Covid Berdasarkan Global" />
        </div>
        <div className={styles.global__body}>
          {data.indonesia.map((data) => (
            <Card
              key={data.status}
              status={data.status}
              total={data.total}
              detail={data.detail}
            />
          ))}
        </div>
        <div className={styles.global__update}>
          <p>Last Updated : {data.last_update}</p>
        </div>
      </div>
    </div>
  );
}

export default Global;
