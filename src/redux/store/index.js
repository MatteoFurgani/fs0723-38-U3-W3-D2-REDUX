import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favourite";
import searchResultReducer from "../reducers/searchResult";

const globalReducer = combineReducers({
  favourite: favouriteReducer,
  searchResult: searchResultReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
