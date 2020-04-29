import { combineReducers } from "redux";

import header from "../components/Header/reducer";
import search from "../components/Movies/reducer"

export default combineReducers({
  header,
  search
});
