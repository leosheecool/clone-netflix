import axios from "axios";
import { Row } from "components";
import Banner from "components/Banner/Banner";
import Header from "components/Header/Header";
import { CinematicEntry } from "lib/data.type";
import requests from "lib/requests";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [movies, setMovies] = useState<CinematicEntry[]>([]);

  useEffect(() => {
    if (movies.length > 0) return;
    axios.get(requests.fetchTrendingMovies).then((res) => {
      setMovies(res.data.results);
    });
  }, [movies]);

  console.log(movies);

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  return (
    <div>
      <Helmet>
        <title>Home - Netflix</title>
        <meta name="description" content="Netflix homepage" />
        <link rel="icon" href="/nficon2016.ico" />
      </Helmet>
      <Header />
      <Banner movie={randomMovie} />
      <Row
        title="Netflix originals"
        UrlToFetch={requests.fetchNetflixOriginals}
      />
      <Row title="Trending" data={movies} />
      <Row title="Popular Movies" UrlToFetch={requests.fetchPopularMovies} />
      <Row title="Top Rated Movies" UrlToFetch={requests.fetchTopRatedMovies} />
      <Row title="Trending TV Shows" UrlToFetch={requests.fetchTrendingTV} />
      {/* <Row title="Upcoming Movies" UrlToFetch={requests.fetchUpcomingMovies} /> */}
    </div>
  );
};

export default Index;
