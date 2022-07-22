import React from "react";
import styles from "./Banner.module.scss";
import cn from "classnames";
import { CinematicEntry } from "lib/data.type";

type Props = {
  movie?: CinematicEntry;
};

const Banner = ({ movie }: Props) => {
  return (
    <div className={styles.container}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt={movie?.title}
        className={styles.image}
      />
      <div className={styles.vignette} />
      <div className={styles.infoContainer}>
        <p className={styles.type}>{movie?.media_type}</p>
        <h2 className={styles.title}>{movie?.title}</h2>
        <p className={styles.description}>{movie?.overview}</p>
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
