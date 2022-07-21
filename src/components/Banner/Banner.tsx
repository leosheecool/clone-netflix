import React from "react";
import styles from "./Banner.module.scss";
import cn from "classnames";

type Props = {
  title: string;
  type: string;
  description: string;
  video: string;
};

const Banner = ({ title, type, description, video }: Props) => {
  return (
    <div className={styles.container}>
      <img
        src="https://via.placeholder.com/1920x1080"
        alt={title}
        className={styles.image}
      />
      <div className={styles.infoContainer}>
        <p className={styles.type}>{type}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonContainer}>
          <button className={cn(styles.button, styles.playBtn)}>Play</button>
          <button className={cn(styles.button, styles.moreInfoBtn)}>
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
