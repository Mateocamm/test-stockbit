import { getMovies } from "../lib/movies";
import {
  SEARCH_MOVIES_LOADING,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from "../types";

export const searchMovies = (filter, page) => (dispatch) => {
  dispatch({ type: SEARCH_MOVIES_LOADING });

  getMovies(filter, page).then(
    (data) => dispatch({ type: SEARCH_MOVIES_SUCCESS, data, page, filter }),
    (error) =>
      dispatch({
        type: SEARCH_MOVIES_ERROR,
        error: error.message || "Unexpected Error!!!",
      })
  );
};
