export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const addToFavouriteAction = (favourite) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: favourite,
  };
};

export const removeFromFavouriteAction = (favourite) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: favourite,
  };
};

export const setCompanySearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const fetchCompanySearchResults = (companyName) => {
  return async (dispatch) => {
    try {
      const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?company=";
      const response = await fetch(baseEndpoint + companyName);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setCompanySearchResults(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.error("Error fetching company search results:", error);
    }
  };
};
