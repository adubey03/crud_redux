import { combineReducers, createStore } from "redux";
import cards from "./cards";

// combining reducers for future scalability
const reducer = combineReducers({ cards });
// creating a store for the redux
const store = createStore(reducer);

export default store;
