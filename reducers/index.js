import {
  SEARCH_MOVIES_LOADING,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_ERROR,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  error: "",
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
      return {
        ...state,
        data: action.data,
        loading: false,
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
