import React, { useEffect } from "react";
import axios from "axios";

import { CinematicEntry } from "lib/data.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";

import styles from "./Row.module.scss";
import "swiper/css/navigation";
import "swiper/css/grid";

type Props = {
  title: string;
  UrlToFetch?: string;
  data?: CinematicEntry[];
};

const Row = ({ title, UrlToFetch, data = [] }: Props) => {
  const [content, setContent] = React.useState<CinematicEntry[]>(data);

  useEffect(() => {
    if (content.length > 0 || !UrlToFetch) return;
    axios
      .get(UrlToFetch)
      .then((res) => {
        setContent(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [UrlToFetch, content]);

  useEffect(() => {
    if (!data || content.length > 0) return;
    setContent(data);
  }, [data, content]);

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.row}>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          grid={{
            rows: 1,
          }}
          navigation={true}
          modules={[Grid, Navigation]}
        >
          {content.map((item) => {
            return (
              <SwiperSlide key={item.poster_path} className={styles.item}>
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.title}
                  className={styles.image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Row;
