import { combineReducers } from "redux";

import { reducers as userReducers } from "./user";
import { reducers as eventsReducers } from "./events";
import { reducers as navigationReducers } from "./navigation";

const reducers = combineReducers({
  userReducers,
  eventsReducers,
  navigationReducers
});

export { reducers };
