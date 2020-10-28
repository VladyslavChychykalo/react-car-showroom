import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import toggleMenuReducer from "./toggleMenu/toggleMenuReducer";

const rootReducer = combineReducers({
  //   menu: toggleMenuReducer,
});

const store = createStore(rootReducer);

export default store;
