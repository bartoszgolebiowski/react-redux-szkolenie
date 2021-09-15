import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingProducts, TrendingProduct } from "../../product";
export interface CounterState {
  value: number;
  prevValue: number;
  isLoading: boolean;
  isError: boolean;
  data: TrendingProduct[];
  cart: TrendingProduct[];
}
const initialState: CounterState = {
  value: 0,
  prevValue: 0,
  isLoading: false,
  isError: false,
  data: [],
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
};
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
    addToCart: (state, action: PayloadAction<TrendingProduct>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (product) => product.listing_id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.data = [];
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
export const {
  increment,
  decrement,
  incrementByAmount,
  addToCart,
  removeFromCart,
} = counterSlice.actions;
export default counterSlice.reducer;
