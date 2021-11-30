import { combineReducers } from "redux";
import postsReducer from "@redux/reducers/postsReducer";
import pagesReducer from "@redux/reducers/pagesReducer";
import categoriesReducer from "@redux/reducers/categoriesReducer";
import { connectRouter } from 'connected-react-router'

const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  postsReducer,
  pagesReducer,
  categoriesReducer
});

export default rootReducer;
