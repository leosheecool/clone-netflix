const API_KEY =
  process.env.REACT_APP_API_KEY || "ebc795444944ae46fa639cc55b79ded3";

const API_BASE_URL = "https://api.themoviedb.org/3";

export const imageBase = "https://image.tmdb.org/t/p/w500";
export const imageLargeBase = "https://image.tmdb.org/t/p/w1280";

export const requests = {
  searchQuery: `${API_BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  fetchGenres: `${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovies: `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedMovies: `${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTrendingMovies: `${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  fetchTrendingTV: `${API_BASE_URL}/trending/tv/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
};

export const fetchMovie = (id: number) => {
  return `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,release_dates`;
};

export const fetchTV = (id: number) => {
  return `${API_BASE_URL}/tv/${id}?api_key=${API_KEY}&append_to_response=videos,content_ratings`;
};

export const fetchSearchString = (query: string) => {
  let queryString = encodeURIComponent(query);
  return `${API_BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${queryString}&page=1&include_adult=false`;
};

export const fetchRecommendedMovies = (id: number) => {
  return `${API_BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
};

export const fetchRecommendedTV = (id: number) => {
  return `${API_BASE_URL}/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
};

export const fetchSimilarMovies = (id: number) => {
  return `${API_BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
};

export const fetchSimilarTV = (id: number) => {
  return `${API_BASE_URL}/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
};

export default requests;
