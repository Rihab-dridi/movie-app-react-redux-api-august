import { DISPLAY } from "./action-types";

const initialState = {
  movieList: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY:
      return {
        ...state,
        movieList: action.payload,
      };

    default:
      return state;
  }
};
