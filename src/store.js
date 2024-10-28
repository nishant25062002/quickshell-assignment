import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./redux/reducer/ticketReducer";

const reducer = {
  ticket: ticketReducer,
};

const store = configureStore({
  reducer,
});

export default store;
