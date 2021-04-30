const API_KEY = "f797e2cf0bb90660383d12fa045c15e6";
export default {
  fetchTrending: {
    title: "Film Terbaru",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Film Rating Tertinggi",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchMovieActions: {
    title: "Film Actions",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Film Comedi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHororMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romantis",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mistery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimations: {
    title: "Animations",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
