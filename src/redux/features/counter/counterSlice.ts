import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface counterState {
  count: number;
}

const initialState: counterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },

    incrementedByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementedByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
