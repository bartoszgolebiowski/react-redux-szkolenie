import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingProducts, TrendingProduct } from "../../product";

export interface CounterState {
  value: number;
  prevValue: number;
  isLoading: boolean;
  isError: boolean;
  data: TrendingProduct[];
}

const initialState: CounterState = {
  value: 0,
  prevValue: 0,
  isLoading: false,
  isError: false,
  data: [],
};

// First, create the thunk :)
export const fetchProducts = createAsyncThunk(
  "counter/fetchProducts",
  async () => {
    return getTrendingProducts();
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.data = [];
        //console.log(action);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.data = [];
      });
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
