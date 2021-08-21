import axios from "axios";

export const getMovies = async (filter, page) => {
  let cancel;
  return axios
    .get(
      `${process.env.NEXT_PUBLIC_MOVIE_URL_API}&s=${filter}&page=${page}&type=movie`,
      { params: { cancelToken: new axios.CancelToken((c) => (cancel = c)) } }
    )
    .then((response) => response.data)
    .catch((e) => {
      if (axios.isCancel(e)) return;
      console.log(e)
      return e;
    });
};

export const getMovie = async (imdbID) => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_MOVIE_URL_API}&i=${imdbID}`)
    .then((response) => response.data);
};
