import axios from 'axios'

export const getMovies = async (filter, page) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_MOVIE_URL_API}&s=${filter}&page=${page}&type=movie`
  ).then(response => response.data);
};

export const getMovie = async (imdbID) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_MOVIE_URL_API}&i=${imdbID}`
  ).then(response => response.data);
};




