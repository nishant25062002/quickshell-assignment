import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticketsAndUsers: null,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    SetTicketsAndUsers: (state, action) => {
      state.ticketsAndUsers = action.payload;
    },
  },
});

export const { SetTicketsAndUsers } = ticketSlice.actions;

export default ticketSlice.reducer;
