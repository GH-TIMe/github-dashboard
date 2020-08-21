import { combineReducers } from "redux";

import repos from "./repos";
import sort from "./sort";
import order from "./order";
import search from "./search";
import pagination from "./pagination";
import card from "./card";

const root = combineReducers({
  repos,
  sort,
  order,
  search,
  pagination,
  card,
});

export default root;
