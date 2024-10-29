import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  grouping: "status",
  ordering: "priority",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    SetGrouping: (state, action) => {
      state.grouping = action.payload;
    },
    SetOrdering: (state, action) => {
      state.ordering = action.payload;
    },
  },
});

export const { SetGrouping, SetOrdering } = filterSlice.actions;
export default filterSlice.reducer;
