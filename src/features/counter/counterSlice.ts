import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  prevValue: number;
}

const initialState: CounterState = {
  value: 0,
  prevValue: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.prevValue = state.value;
      state.value += 1;
    },
    decrement: (state) => {
      state.prevValue = state.value;
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.prevValue = state.value;
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
