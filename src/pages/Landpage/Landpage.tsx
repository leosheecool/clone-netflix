import React from "react";
import styles from "./Landpage.module.scss";

const Landpage = () => {
  return (
    <div>
      <div className={styles.header}>
        <img alt="netflix" />
      </div>
      <div className={styles.content}></div>
    </div>
  );
};

export default Landpage;
