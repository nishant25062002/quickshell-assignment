import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./redux/reducer/ticketReducer";
// import filterReducer from "./redux/reducer/filterReducer";

const reducer = {
  ticket: ticketReducer,
  // filter: filterReducer,
};

const store = configureStore({
  reducer,
});

export default store;
