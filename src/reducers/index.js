import formVisibleReducer from "./form-visible-reducer";
import kegMenuReducer from "./keg-menu-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  fullKegMenu: kegMenuReducer,
});

export default rootReducer;
