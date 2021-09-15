import React from "react";
import { fetchProducts } from "./features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import Product from "./SingleProduct";
function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.counter.data);
  const cart = useAppSelector((state) => state.counter.cart);
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div>
      <div>
        <h4>Product</h4>
        {data.map((singleElement) => {
          return <Product product={singleElement} />;
        })}
      </div>
      <div>
        <h4>Cart</h4>
        {cart.map((singleElement) => {
          return <Product product={singleElement} />;
        })}
      </div>
    </div>
  );
}
export default App;
