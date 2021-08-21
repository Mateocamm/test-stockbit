import {
  SEARCH_MOVIES_LOADING,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  error: "",
  hasMore: true,
  page: 1,
  filter: "",
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIES_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case SEARCH_MOVIES_SUCCESS: {
      let listMovies;

      if (action.page == 1) listMovies = action.data.Search ?? [];
      else
        listMovies = [
          ...new Set([...state.data, ...(action.data.Search ?? [])]),
        ];

      return {
        ...state,
        data: listMovies,
        loading: false,
        page: action.page,
        hasMore: action.data.totalResults > action.page * 10,
        filter: action.filter
      };
    }
    case SEARCH_MOVIES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
