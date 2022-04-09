import React from "react";
import styles from "./index.module.css";
import Title from "../Title";
import Button from "../Button";
import Img from "../Image";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.hero__left}>
          <Img>img/hero.svg</Img>
        </div>
        <div className={styles.hero__right}>
          <div className={styles.hero__title}>
            <Title title="Covid ID" />
            <Title subtitle="Monitoring Perkembangan Covid" />
          </div>
          <div className={styles.hero__body}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </div>
          <div className={styles.hero__button}>
            <Button>Vaccine</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
