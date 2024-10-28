import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticketInfo: null,
  allTickets: null,
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    SelectedTicket: (state, action) => {
      state.ticketInfo = action.payload;
    },
    SetAllTicket: (state, action) => {
      state.allTickets = action.payload;
    },
  },
});

export const { SelectedTicket, SetAllTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
