const API_KEY =
  process.env.REACT_APP_API_KEY || "ebc795444944ae46fa639cc55b79ded3";

export const imageBase = "https://image.tmdb.org/t/p/w500";
export const imageLargeBase = "https://image.tmdb.org/t/p/w1280";

export const requests = {
  searchQuery: `/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  fetchGenres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
  fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}`,
};

export const fetchMovie = (id: number) => {
  return `/movie/${id}?api_key=${API_KEY}&append_to_response=videos,release_dates`;
};

export const fetchTV = (id: number) => {
  return `/tv/${id}?api_key=${API_KEY}&append_to_response=videos,content_ratings`;
};

export const fetchSearchString = (query: string) => {
  let queryString = encodeURIComponent(query);
  return `/search/multi?api_key=${API_KEY}&language=en-US&query=${queryString}&page=1&include_adult=false`;
};

export const fetchRecommendedMovies = (id: number) => {
  return `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
};

export const fetchRecommendedTV = (id: number) => {
  return `/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
};

export const fetchSimilarMovies = (id: number) => {
  return `/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
};

export const fetchSimilarTV = (id: number) => {
  return `/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
};

export default requests;
