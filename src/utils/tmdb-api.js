import axios from "axios";

const LANGUAGE = 'en-US';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmEzYjQ1N2Q1YmU3ZWUxNmY5ZjFiNGUyYWJiNjBhNSIsInN1YiI6IjY1ZTlkMTEyYWY5NTkwMDE2MWRjNDBjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q75ty3y5PPcJmeEZn58UvjOVZkScBwonr0eEgU19VpI';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;

const tmdbAPI = {
  posterImagePath: IMAGE_PATH,

  getTrendingMovies: async function (timeWindow = 'day', language = '') {
    const response = await axios.get(`/3/trending/movie/${timeWindow}`, {
      params: { language: language || LANGUAGE },
    });
    return response.data.results;
  },

  getMovieDetais: async function (id, language = '') {
    const response = await axios.get(`/3/movie/${id}`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMovieReviews: async function (id, language = '') {
    const response = await axios.get(`/3/movie/${id}/reviews`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMovieCast: async function (id, language = '') {
    const response = await axios.get(`/3/movie/${id}/credits`, {
      params: { language: language || LANGUAGE },
    });
    return response.data;
  },

  getMoviesByQuery: async function (query, language = '') {
    const response = await axios.get(`/3/search/movie`, {
      params: { query, language: language || LANGUAGE, include_adult: false },
    });
    return response.data.results;
  },
};

export default tmdbAPI;