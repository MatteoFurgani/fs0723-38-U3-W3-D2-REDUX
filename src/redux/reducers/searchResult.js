import { SET_SEARCH_RESULTS } from "../action";

const initialState = {
  results: [],
};

const searchResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default searchResultReducer;
