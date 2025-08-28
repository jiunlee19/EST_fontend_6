import { combineReducers } from "redux";
import { createStore } from "redux";
import balanceReducer from "./balanceReducer";
// import expenseReducer from "./expenseReducer";

const rootReducer = combineReducers({
    balanceReducer,
    // expenseReducer,
});

const store = createStore(rootReducer);

export default store;
